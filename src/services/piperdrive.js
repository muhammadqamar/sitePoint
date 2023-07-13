import httpService from "./http"
const piperKey =
  process.env.GATSBY_API_KEY || "fed49ea2bc194fbbe81dd0eeedfdaabb46125a2b"

export const getAllFields = () =>
  httpService
    .get(`/dealFields?api_token=${piperKey}`)
    .then(({ data }) => data)
    .catch(err => Promise.reject(err.response.data))

export const createPerson = data =>
  httpService
    .post(`/persons?api_token=${piperKey}`, data)
    .then(({ data }) => data)
    .catch(err => Promise.reject(err.response.data))

export const createOrganization = data =>
  httpService
    .post(`/organizations?api_token=${piperKey}`, data)
    .then(({ data }) => data)
    .catch(err => Promise.reject(err.response.data))

export const createDeal = data =>
  httpService
    .post(`/deals?api_token=${piperKey}`, data)
    .then(({ data }) => data)
    .catch(err => Promise.reject(err.response.data))
