export const SET_CAN_MANAGE_USERS = 'authorisation/SET_CAN_MANAGE_USERS'
export const SET_APP_PERMISSION = 'authorisation/SET_APP_PERMISSION'

const initialState = {
  appPermissions: []
}

export const authorisationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_PERMISSION:
      return Object.assign(
        state, 
        {appPermissions:
          Object.assign(state.appPermissions, {[action.appPermission]: action.hasAppPermission})}
      )
    default:
      return state
  }
}

const setHasAppPermission = (permission, hasAppPermission) => {
  return {
    type: SET_APP_PERMISSION,
    permission,
    hasAppPermission
  }
}

export const hasAppPermission = (idToken, authorisationServiceUrl, permission) => {
  return (dispatch) => {
    const hasAppPermissionUrl = `${authorisationServiceUrl}/hasAppPermission`
    return fetch(hasAppPermissionUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + idToken
      },
      method: 'post',
      mode: 'cors',
      body: JSON.stringify({
        permission
      })
    })
      .then((response) => {
        if (response.status === 401) {
          dispatch(setHasAppPermission(permission, false))
        } else if (response.status === 200) {
          dispatch(setHasAppPermission(permission, true))
        } else {
          console.log('Unknown response from the authorisation service! ' + response)
        }
      })
  }
}
