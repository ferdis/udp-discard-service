/**
 * UDP Based Discard Service
 *
 * Another discard service is defined as a datagram based application on
 *   UDP.  A server listens for UDP datagrams on UDP port 9.  When a
 *         datagram is received, it is thrown away.  No response is sent.
 */

require('dgram').createSocket('udp4').bind(9);

