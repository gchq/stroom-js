/*
 * Copyright 2017 Crown Copyright
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This file is a wrapper for all environment variables. It lets us do a bit of simple mappings
 * and augmentations. E.g. the authentication, token, and user services are all on the same
 * physical service but we can split these up here, decoupling the different areas of the app a bit.
 */

export const authenticationServiceUrl = () => {
  return `${process.env.REACT_APP_AUTH_SERVICE}/authentication/v1`
}

export const authorisationServiceUrl = () => {
  return `${process.env.REACT_APP_STROOM_URL}/api/authorisation/v1`
}

export const authUiAdvertisedUrl = () => {
  return process.env.REACT_APP_ADVERTISED_URL
}

export const rootPath = () => {
  return process.env.REACT_APP_ROOT_PATH
}

export const appClientId = () => {
  return process.env.REACT_APP_CLIENT_ID
}
