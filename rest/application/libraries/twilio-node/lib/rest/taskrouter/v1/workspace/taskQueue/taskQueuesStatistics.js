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
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var TaskQueuesStatisticsList;
var TaskQueuesStatisticsPage;
var TaskQueuesStatisticsInstance;

/* jshint ignore:start */
/**
 * Initialize the TaskQueuesStatisticsList
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid -
 *          The SID of the Workspace that contains the TaskQueue
 */
/* jshint ignore:end */
TaskQueuesStatisticsList = function TaskQueuesStatisticsList(version,
    workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsContext}
   */
  /* jshint ignore:end */
  function TaskQueuesStatisticsListInstance(sid) {
    return TaskQueuesStatisticsListInstance.get(sid);
  }

  TaskQueuesStatisticsListInstance._version = version;
  // Path Solution
  TaskQueuesStatisticsListInstance._solution = {workspaceSid: workspaceSid};
  TaskQueuesStatisticsListInstance._uri = `/Workspaces/${workspaceSid}/TaskQueues/Statistics`;
  /* jshint ignore:start */
  /**
   * Streams TaskQueuesStatisticsInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList#
   *
   * @param {object} [opts] - Options for request
   * @param {Date} [opts.endDate] -
   *          Only calculate statistics from on or before this date
   * @param {string} [opts.friendlyName] -
   *          The friendly_name of the TaskQueue statistics to read
   * @param {number} [opts.minutes] -
   *          Only calculate statistics since this many minutes in the past
   * @param {Date} [opts.startDate] -
   *          Only calculate statistics from on or after this date
   * @param {string} [opts.taskChannel] -
   *          Only calculate statistics on this TaskChannel.
   * @param {string} [opts.splitByWaitTime] -
   *          A comma separated list of values that describes the thresholds to calculate statistics on
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  TaskQueuesStatisticsListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists TaskQueuesStatisticsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList#
   *
   * @param {object} [opts] - Options for request
   * @param {Date} [opts.endDate] -
   *          Only calculate statistics from on or before this date
   * @param {string} [opts.friendlyName] -
   *          The friendly_name of the TaskQueue statistics to read
   * @param {number} [opts.minutes] -
   *          Only calculate statistics since this many minutes in the past
   * @param {Date} [opts.startDate] -
   *          Only calculate statistics from on or after this date
   * @param {string} [opts.taskChannel] -
   *          Only calculate statistics on this TaskChannel.
   * @param {string} [opts.splitByWaitTime] -
   *          A comma separated list of values that describes the thresholds to calculate statistics on
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskQueuesStatisticsListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of TaskQueuesStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList#
   *
   * @param {object} [opts] - Options for request
   * @param {Date} [opts.endDate] -
   *          Only calculate statistics from on or before this date
   * @param {string} [opts.friendlyName] -
   *          The friendly_name of the TaskQueue statistics to read
   * @param {number} [opts.minutes] -
   *          Only calculate statistics since this many minutes in the past
   * @param {Date} [opts.startDate] -
   *          Only calculate statistics from on or after this date
   * @param {string} [opts.taskChannel] -
   *          Only calculate statistics on this TaskChannel.
   * @param {string} [opts.splitByWaitTime] -
   *          A comma separated list of values that describes the thresholds to calculate statistics on
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskQueuesStatisticsListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'EndDate': serialize.iso8601DateTime(_.get(opts, 'endDate')),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Minutes': _.get(opts, 'minutes'),
      'StartDate': serialize.iso8601DateTime(_.get(opts, 'startDate')),
      'TaskChannel': _.get(opts, 'taskChannel'),
      'SplitByWaitTime': _.get(opts, 'splitByWaitTime'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskQueuesStatisticsPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of TaskQueuesStatisticsInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskQueuesStatisticsListInstance.getPage = function getPage(targetUrl, callback)
                                                               {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskQueuesStatisticsPage(this._version, payload, this._solution));
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
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  TaskQueuesStatisticsListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  TaskQueuesStatisticsListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return TaskQueuesStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the TaskQueuesStatisticsPage
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {TaskQueuesStatisticsSolution} solution - Path solution
 *
 * @returns TaskQueuesStatisticsPage
 */
/* jshint ignore:end */
TaskQueuesStatisticsPage = function TaskQueuesStatisticsPage(version, response,
    solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(TaskQueuesStatisticsPage.prototype, Page.prototype);
TaskQueuesStatisticsPage.prototype.constructor = TaskQueuesStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of TaskQueuesStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsPage#
 *
 * @param {TaskQueuesStatisticsPayload} payload - Payload response from the API
 *
 * @returns TaskQueuesStatisticsInstance
 */
/* jshint ignore:end */
TaskQueuesStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new TaskQueuesStatisticsInstance(this._version, payload, this._solution.workspaceSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
TaskQueuesStatisticsPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

TaskQueuesStatisticsPage.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the TaskQueuesStatisticsContext
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsInstance
 *
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {object} cumulative -
 *          An object that contains the cumulative statistics for the TaskQueues
 * @property {object} realtime -
 *          An object that contains the real-time statistics for the TaskQueues
 * @property {string} taskQueueSid -
 *          The SID of the TaskQueue from which these statistics were calculated
 * @property {string} workspaceSid -
 *          The SID of the Workspace that contains the TaskQueues
 *
 * @param {V1} version - Version of the resource
 * @param {TaskQueuesStatisticsPayload} payload - The instance payload
 * @param {sid} workspaceSid - The SID of the Workspace that contains the TaskQueue
 */
/* jshint ignore:end */
TaskQueuesStatisticsInstance = function TaskQueuesStatisticsInstance(version,
    payload, workspaceSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.cumulative = payload.cumulative; // jshint ignore:line
  this.realtime = payload.realtime; // jshint ignore:line
  this.taskQueueSid = payload.task_queue_sid; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {workspaceSid: workspaceSid, };
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
TaskQueuesStatisticsInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

TaskQueuesStatisticsInstance.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  TaskQueuesStatisticsList: TaskQueuesStatisticsList,
  TaskQueuesStatisticsPage: TaskQueuesStatisticsPage,
  TaskQueuesStatisticsInstance: TaskQueuesStatisticsInstance
};