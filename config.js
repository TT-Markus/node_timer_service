var config = {};

config.logFile = 'trace.log';
config.logLevel = 4;
config.redis_server_port = 6380;
config.redis_server_name = '127.0.0.1';
config.max_retry = 10;
config.default_retry_interval = 10; // in 10 seconds
config.att_convert_retry_interval = 60; // in 60 seconds for transmog
config.forever_retry_services = ["tt_archive"];
config.max_retry_interval = 60*60*24; // in 24 hours
config.no_retry_services = ["tt_repeat_push", "tt_repeat_alert_push", "livestats"];
module.exports = config;
