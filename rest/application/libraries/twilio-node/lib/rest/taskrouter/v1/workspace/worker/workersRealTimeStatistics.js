'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var WorkersRealTimeStatisticsList;
var WorkersRealTimeStatisticsPage;
var WorkersRealTimeStatisticsInstance;
var WorkersRealTimeStatisticsContext;

/* jshint ignore:start */
/**
 * Initialize the WorkersRealTimeStatisticsList
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid -
 *          The SID of the Workspace that contains the Workers
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsList = function WorkersRealTimeStatisticsList(version,
    workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function realTimeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext}
   */
  /* jshint ignore:end */
  function WorkersRealTimeStatisticsListInstance(sid) {
    return WorkersRealTimeStatisticsListInstance.get(sid);
  }

  WorkersRealTimeStatisticsListInstance._version = version;
  // Path Solution
  WorkersRealTimeStatisticsListInstance._solution = {workspaceSid: workspaceSid};
  /* jshint ignore:start */
  /**
   * Constructs a workers_real_time_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsList#
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext}
   */
  /* jshint ignore:end */
  WorkersRealTimeStatisticsListInstance.get = function get() {
    return new WorkersRealTimeStatisticsContext(this._version, this._solution.workspaceSid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  WorkersRealTimeStatisticsListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  WorkersRealTimeStatisticsListInstance[util.inspect.custom] = function
      inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return WorkersRealTimeStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the WorkersRealTimeStatisticsPage
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {WorkersRealTimeStatisticsSolution} solution - Path solution
 *
 * @returns WorkersRealTimeStatisticsPage
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsPage = function WorkersRealTimeStatisticsPage(version,
    response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(WorkersRealTimeStatisticsPage.prototype, Page.prototype);
WorkersRealTimeStatisticsPage.prototype.constructor = WorkersRealTimeStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of WorkersRealTimeStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsPage#
 *
 * @param {WorkersRealTimeStatisticsPayload} payload -
 *          Payload response from the API
 *
 * @returns WorkersRealTimeStatisticsInstance
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsPage.prototype.getInstance = function
    getInstance(payload) {
  return new WorkersRealTimeStatisticsInstance(this._version, payload, this._solution.workspaceSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

WorkersRealTimeStatisticsPage.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the WorkersRealTimeStatisticsContext
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsInstance
 *
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {object} activityStatistics -
 *          The number of current Workers by Activity
 * @property {number} totalWorkers - The total number of Workers
 * @property {string} workspaceSid -
 *          The SID of the Workspace that contains the Workers
 * @property {string} url - The absolute URL of the Workers statistics resource
 *
 * @param {V1} version - Version of the resource
 * @param {WorkersRealTimeStatisticsPayload} payload - The instance payload
 * @param {sid} workspaceSid - The SID of the Workspace that contains the Workers
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsInstance = function
    WorkersRealTimeStatisticsInstance(version, payload, workspaceSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.activityStatistics = payload.activity_statistics; // jshint ignore:line
  this.totalWorkers = deserialize.integer(payload.total_workers); // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {workspaceSid: workspaceSid, };
};

Object.defineProperty(WorkersRealTimeStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkersRealTimeStatisticsContext(this._version, this._solution.workspaceSid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a WorkersRealTimeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.taskChannel] -
 *          Only calculate real-time statistics on this TaskChannel
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkersRealTimeStatisticsInstance
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsInstance.prototype.fetch = function fetch(opts,
    callback) {
  return this._proxy.fetch(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

WorkersRealTimeStatisticsInstance.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the WorkersRealTimeStatisticsContext
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} workspaceSid - The SID of the Workspace with the resource to fetch
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsContext = function
    WorkersRealTimeStatisticsContext(version, workspaceSid) {
  this._version = version;

  // Path Solution
  this._solution = {workspaceSid: workspaceSid, };
  this._uri = `/Workspaces/${workspaceSid}/Workers/RealTimeStatistics`;
};

/* jshint ignore:start */
/**
 * fetch a WorkersRealTimeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.taskChannel] -
 *          Only calculate real-time statistics on this TaskChannel
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkersRealTimeStatisticsInstance
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsContext.prototype.fetch = function fetch(opts,
    callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({'TaskChannel': _.get(opts, 'taskChannel')});

  var promise = this._version.fetch({uri: this._uri, method: 'GET', params: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkersRealTimeStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

WorkersRealTimeStatisticsContext.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  WorkersRealTimeStatisticsList: WorkersRealTimeStatisticsList,
  WorkersRealTimeStatisticsPage: WorkersRealTimeStatisticsPage,
  WorkersRealTimeStatisticsInstance: WorkersRealTimeStatisticsInstance,
  WorkersRealTimeStatisticsContext: WorkersRealTimeStatisticsContext
};