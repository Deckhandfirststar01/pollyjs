import '@pollyjs-tests/helpers/global-fetch';

import FSPersister from '../../src';
import setupPersister from '@pollyjs-tests/helpers/setup-persister';
import setupFetchRecord from '@pollyjs-tests/helpers/setup-fetch-record';
import persisterTests from '@pollyjs-tests/integration/persister-tests';
import FetchAdapter from '@pollyjs/adapter-fetch';
import { setupMocha as setupPolly } from '@pollyjs/core';

describe('Integration | FS Persister', function() {
  setupPolly.beforeEach({
    recordFailedRequests: true,
    adapters: [FetchAdapter],
    persister: FSPersister
  });

  setupFetchRecord({ host: 'http://localhost:4000' });
  setupPersister();
  setupPolly.afterEach();

  persisterTests();
});
