'use strict';

const { newrelic } = require('./build/config').config;

exports.config = {
  app_name: newrelic.appName,
  license_key: newrelic.license,
  logging: {
    level: newrelic.logLevel,
    enabled: false,
  },
  distributed_tracing: { enabled: true },
  cross_application_tracer: { enabled: true },
};
