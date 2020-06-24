/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Notify = require('../Notify');
import Version = require('../../base/Version');
import { CredentialList } from './v1/credential';
import { CredentialListInstance } from './v1/credential';
import { ServiceList } from './v1/service';
import { ServiceListInstance } from './v1/service';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Notify
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Notify);

  readonly credentials: CredentialListInstance;
  readonly services: ServiceListInstance;
}

export = V1;