'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Recording', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.recordings('RTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'RTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://video.twilio.com/v1/Recordings/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'processing',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T21:00:00Z',
          'date_deleted': '2015-07-30T22:00:00Z',
          'sid': 'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'source_sid': 'MTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'size': 0,
          'url': 'https://video.twilio.com/v1/Recordings/RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'type': 'audio',
          'duration': 0,
          'container_format': 'mka',
          'codec': 'OPUS',
          'track_name': 'A name',
          'offset': 10,
          'grouping_sids': {
              'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          'media_external_location': 'https://my-super-duper-bucket.s3.amazonaws.com/my/path/',
          'encryption_key': 'public_key',
          'links': {
              'media': 'https://video.twilio.com/v1/Recordings/RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.recordings('RTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'recordings': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T21:00:00Z',
                  'date_deleted': '2015-07-30T22:00:00Z',
                  'sid': 'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'source_sid': 'MTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'size': 23,
                  'type': 'audio',
                  'duration': 10,
                  'container_format': 'mka',
                  'codec': 'OPUS',
                  'track_name': 'A name',
                  'offset': 10,
                  'grouping_sids': {
                      'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'participant_sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'media_external_location': 'https://my-super-duper-bucket.s3.amazonaws.com/my/path/',
                  'encryption_key': 'public_key',
                  'url': 'https://video.twilio.com/v1/Recordings/RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'media': 'https://video.twilio.com/v1/Recordings/RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Recordings?Status=completed&DateCreatedAfter=2017-01-01T00%3A00%3A01Z&DateCreatedBefore=2017-12-31T23%3A59%3A59Z&SourceSid=source_sid&MediaType=audio&GroupingSid=RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Recordings?Status=completed&DateCreatedAfter=2017-01-01T00%3A00%3A01Z&DateCreatedBefore=2017-12-31T23%3A59%3A59Z&SourceSid=source_sid&MediaType=audio&GroupingSid=RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'recordings'
          }
      });
      holodeck.mock(new Response(200, body));
      client.video.v1.recordings.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'recordings': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T21:00:00Z',
                  'date_deleted': '2015-07-30T22:00:00Z',
                  'sid': 'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'source_sid': 'MTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'size': 23,
                  'type': 'audio',
                  'duration': 10,
                  'container_format': 'mka',
                  'codec': 'OPUS',
                  'track_name': 'A name',
                  'offset': 10,
                  'grouping_sids': {
                      'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'participant_sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'media_external_location': 'https://my-super-duper-bucket.s3.amazonaws.com/my/path/',
                  'encryption_key': 'public_key',
                  'url': 'https://video.twilio.com/v1/Recordings/RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'media': 'https://video.twilio.com/v1/Recordings/RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Recordings?Status=completed&DateCreatedAfter=2017-01-01T00%3A00%3A01Z&DateCreatedBefore=2017-12-31T23%3A59%3A59Z&SourceSid=source_sid&MediaType=audio&GroupingSid=RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Recordings?Status=completed&DateCreatedAfter=2017-01-01T00%3A00%3A01Z&DateCreatedBefore=2017-12-31T23%3A59%3A59Z&SourceSid=source_sid&MediaType=audio&GroupingSid=RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'recordings'
          }
      });
      holodeck.mock(new Response(200, body));
      client.video.v1.recordings.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://video.twilio.com/v1/Recordings',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'recordings': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T21:00:00Z',
                  'date_deleted': '2015-07-30T22:00:00Z',
                  'sid': 'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'source_sid': 'MTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'size': 23,
                  'type': 'audio',
                  'duration': 10,
                  'container_format': 'mka',
                  'codec': 'OPUS',
                  'track_name': 'A name',
                  'offset': 10,
                  'grouping_sids': {
                      'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'participant_sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'media_external_location': 'https://my-super-duper-bucket.s3.amazonaws.com/my/path/',
                  'encryption_key': 'public_key',
                  'url': 'https://video.twilio.com/v1/Recordings/RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'media': 'https://video.twilio.com/v1/Recordings/RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Recordings?Status=completed&DateCreatedAfter=2017-01-01T00%3A00%3A01Z&DateCreatedBefore=2017-12-31T23%3A59%3A59Z&SourceSid=source_sid&MediaType=audio&GroupingSid=RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Recordings?Status=completed&DateCreatedAfter=2017-01-01T00%3A00%3A01Z&DateCreatedBefore=2017-12-31T23%3A59%3A59Z&SourceSid=source_sid&MediaType=audio&GroupingSid=RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'recordings'
          }
      });
      holodeck.mock(new Response(200, body));
      client.video.v1.recordings.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.recordings.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://video.twilio.com/v1/Recordings';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'recordings': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Recordings?Status=completed&SourceSid=source_sid&MediaType=audio&GroupingSid=RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Recordings?Status=completed&SourceSid=source_sid&MediaType=audio&GroupingSid=RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'recordings'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.recordings.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_results response',
    function(done) {
      var body = JSON.stringify({
          'recordings': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T21:00:00Z',
                  'date_deleted': '2015-07-30T22:00:00Z',
                  'sid': 'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'source_sid': 'MTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'size': 23,
                  'type': 'audio',
                  'duration': 10,
                  'container_format': 'mka',
                  'codec': 'OPUS',
                  'track_name': 'A name',
                  'offset': 10,
                  'grouping_sids': {
                      'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'participant_sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'media_external_location': 'https://my-super-duper-bucket.s3.amazonaws.com/my/path/',
                  'encryption_key': 'public_key',
                  'url': 'https://video.twilio.com/v1/Recordings/RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'media': 'https://video.twilio.com/v1/Recordings/RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Recordings?Status=completed&DateCreatedAfter=2017-01-01T00%3A00%3A01Z&DateCreatedBefore=2017-12-31T23%3A59%3A59Z&SourceSid=source_sid&MediaType=audio&GroupingSid=RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Recordings?Status=completed&DateCreatedAfter=2017-01-01T00%3A00%3A01Z&DateCreatedBefore=2017-12-31T23%3A59%3A59Z&SourceSid=source_sid&MediaType=audio&GroupingSid=RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'recordings'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.recordings.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.recordings('RTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'RTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://video.twilio.com/v1/Recordings/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.video.v1.recordings('RTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});