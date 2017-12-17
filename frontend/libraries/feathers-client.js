import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import axios from 'axios'
import hooks from 'feathers-hooks'
import auth from 'feathers-authentication-client'
import { CookieStorage } from 'cookie-storage'

const feathersClient = feathers()
  .configure(hooks())
  .configure(rest('http://localhost:3030').axios(axios))
  .configure(auth({ storage: new CookieStorage() }))

export default feathersClient
