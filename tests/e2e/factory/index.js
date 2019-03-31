import {
  createArticle,
  createMagazine,
} from './resources'
import {
  createAuthResponse,
  createCredentials
} from './auth'
import {
  createUser,
} from './users'
import {
  createInitialVuexStoreGetters,
  createInitialVuexStoreState,
} from './store'
import {
  createApiUrl,
} from './env'

export default {
  // Auth builders
  createAuthResponse,
  createCredentials,
  // Entities builders
  createArticle,
  createMagazine,
  // Env builders
  createApiUrl,
  // Store builders
  createInitialVuexStoreState,
  createInitialVuexStoreGetters,
  // User builders
  createUser,
}
