var knownConfigVars = [
  'npm_config_audit',
  'npm_config_audit_level',
  'npm_config_before',
  'npm_config_cidr',
  'npm_config_commit_hooks',
  'npm_config_format_package_lock',
  'npm_config_fund',
  'npm_config_node_gyp',
  'npm_config_node_options',
  'npm_config_noproxy',
  'npm_config_otp',
  'npm_config_package_lock_only',
  'npm_config_preid',
  'npm_config_read_only',
  'npm_config_sign_git_commit',
  'npm_config_update_notifier',
  'npm_config_save_dev',
  'npm_config_legacy_bundling',
  'npm_config_dry_run',
  'npm_config_viewer',
  'npm_config_only',
  'npm_config_browser',
  'npm_config_also',
  'npm_config_rollback',
  'npm_config_usage',
  'npm_config_runtime',
  'npm_config_globalignorefile',
  'npm_config_shell',
  'npm_config_maxsockets',
  'npm_config_init_author_url',
  'npm_config_shrinkwrap',
  'npm_config_parseable',
  'npm_config_build_from_source',
  'npm_config_metrics_registry',
  'npm_config_timing',
  'npm_config_init_license',
  'npm_config_if_present',
  'npm_config_sign_git_tag',
  'npm_config_init_author_email',
  'npm_config_cache_max',
  'npm_config_long',
  'npm_config_local_address',
  'npm_config_git_tag_version',
  'npm_config_cert',
  'npm_config_registry',
  'npm_config_fetch_retries',
  'npm_config_target_arch',
  'npm_config_versions',
  'npm_config_message',
  'npm_config_key',
  'npm_config_globalconfig',
  'npm_config_prefer_online',
  'npm_config_logs_max',
  'npm_config_always_auth',
  'npm_config_global_style',
  'npm_config_cache_lock_retries',
  'npm_config_cafile',
  'npm_config_heading',
  'npm_config_searchlimit',
  'npm_config_proprietary_attribs',
  'npm_config_offline',
  'npm_config_fetch_retry_mintimeout',
  'npm_config_json',
  'npm_config_access',
  'npm_config_argv',
  'npm_config_allow_same_version',
  'npm_config_https_proxy',
  'npm_config_engine_strict',
  'npm_config_description',
  'npm_config_userconfig',
  'npm_config_init_module',
  'npm_config_user',
  'npm_config_node_version',
  'npm_config_save',
  'npm_config_ignore_prepublish',
  'npm_config_editor',
  'npm_config_auth_type',
  'npm_config_target',
  'npm_config_tag',
  'npm_config_script_shell',
  'npm_config_progress',
  'npm_config_global',
  'npm_config_searchstaleness',
  'npm_config_optional',
  'npm_config_ham_it_up',
  'npm_config_save_prod',
  'npm_config_force',
  'npm_config_bin_links',
  'npm_config_searchopts',
  'npm_config_depth',
  'npm_config_sso_poll_frequency',
  'npm_config_rebuild_bundle',
  'npm_config_unicode',
  'npm_config_fetch_retry_maxtimeout',
  'npm_config_strict_ssl',
  'npm_config_sso_type',
  'npm_config_scripts_prepend_node_path',
  'npm_config_save_prefix',
  'npm_config_loglevel',
  'npm_config_ca',
  'npm_config_tag_version_prefix',
  'npm_config_group',
  'npm_config_fetch_retry_factor',
  'npm_config_dev',
  'npm_config_save_exact',
  'npm_config_version',
  'npm_config_prefer_offline',
  'npm_config_cache_lock_stale',
  'npm_config_cache_min',
  'npm_config_disturl',
  'npm_config_searchexclude',
  'npm_config_cache',
  'npm_config_color',
  'npm_config_proxy',
  'npm_config_package_lock',
  'npm_config_save_optional',
  'npm_config_ignore_scripts',
  'npm_config_user_agent',
  'npm_config_cache_lock_wait',
  'npm_config_production',
  'npm_config_send_metrics',
  'npm_config_save_bundle',
  'npm_config_umask',
  'npm_config_init_version',
  'npm_config_init_author_name',
  'npm_config_git',
  'npm_config_scope',
  'npm_config_unsafe_perm',
  'npm_config_tmp',
  'npm_config_onload_script',
  'npm_config_prefix',
  'npm_config_link',
  'npm_config_save_dev',
  'npm_config_legacy_bundling',
  'npm_config_dry_run',
  'npm_config_viewer',
  'npm_config_only',
  'npm_config_browser',
  'npm_config_also',
  'npm_config_rollback',
  'npm_config_usage',
  'npm_config_runtime',
  'npm_config_globalignorefile',
  'npm_config_shell',
  'npm_config_maxsockets',
  'npm_config_init_author_url',
  'npm_config_shrinkwrap',
  'npm_config_parseable',
  'npm_config_build_from_source',
  'npm_config_metrics_registry',
  'npm_config_timing',
  'npm_config_init_license',
  'npm_config_if_present',
  'npm_config_sign_git_tag',
  'npm_config_init_author_email',
  'npm_config_cache_max',
  'npm_config_long',
  'npm_config_local_address',
  'npm_config_git_tag_version',
  'npm_config_cert',
  'npm_config_registry',
  'npm_config_fetch_retries',
  'npm_config_target_arch',
  'npm_config_versions',
  'npm_config_message',
  'npm_config_key',
  'npm_config_globalconfig',
  'npm_config_logs_max',
  'npm_config_always_auth',
  'npm_config_global_style',
  'npm_config_cache_lock_retries',
  'npm_config_cafile',
  'npm_config_heading',
  'npm_config_searchlimit',
  'npm_config_proprietary_attribs',
  'npm_config_fetch_retry_mintimeout',
  'npm_config_json',
  'npm_config_access',
  'npm_config_argv',
  'npm_config_allow_same_version',
  'npm_config_https_proxy',
  'npm_config_engine_strict',
  'npm_config_description',
  'npm_config_userconfig',
  'npm_config_init_module',
  'npm_config_user',
  'npm_config_node_version',
  'npm_config_save',
  'npm_config_editor',
  'npm_config_auth_type',
  'npm_config_target',
  'npm_config_progress',
  'npm_config_global',
  'npm_config_searchstaleness',
  'npm_config_optional',
  'npm_config_ham_it_up',
  'npm_config_force',
  'npm_config_bin_links',
  'npm_config_searchopts',
  'npm_config_depth',
  'npm_config_sso_poll_frequency',
  'npm_config_rebuild_bundle',
  'npm_config_unicode',
  'npm_config_fetch_retry_maxtimeout',
  'npm_config_strict_ssl',
  'npm_config_sso_type',
  'npm_config_scripts_prepend_node_path',
  'npm_config_save_prefix',
  'npm_config_loglevel',
  'npm_config_ca',
  'npm_config_tag_version_prefix',
  'npm_config_group',
  'npm_config_fetch_retry_factor',
  'npm_config_dev',
  'npm_config_save_exact',
  'npm_config_version',
  'npm_config_cache_lock_stale',
  'npm_config_cache_min',
  'npm_config_disturl',
  'npm_config_searchexclude',
  'npm_config_cache',
  'npm_config_color',
  'npm_config_proxy',
  'npm_config_save_optional',
  'npm_config_ignore_scripts',
  'npm_config_user_agent',
  'npm_config_cache_lock_wait',
  'npm_config_production',
  'npm_config_send_metrics',
  'npm_config_save_bundle',
  'npm_config_umask',
  'npm_config_init_version',
  'npm_config_init_author_name',
  'npm_config_git',
  'npm_config_scope',
  'npm_config_unsafe_perm',
  'npm_config_tmp',
  'npm_config_tag',
  'npm_config_onload_script',
  'npm_config_prefix',
  'npm_config_link',
  'npm_config_prefer_online'
 ];
 
 function isArgument(key) {
   return /^npm_config_/.test(key);
 }
 
 function isKnown(key) {
   return knownConfigVars.indexOf(key) > -1;
 }
 
 function isArgumentAlreadyPresent(key) {
   process.argv.forEach(function (arg) {
     var regex = new RegExp('^' + key + '=?(.*)?');
     return regex.test(arg);
   });
 }
 
 function assignConfigToArgs(options) {
   Object.keys(process.env).forEach(function (key) {
     // Is this env var an argument beginning with npm_config?
     if (!isArgument(key)) return;
 
     // Should we ignore all known vars?
     if ((!options || (!options.includeAllKnown && !options.include)) && isKnown(key)) return;
 
     var name = key.replace('npm_config_', '');
 
     // Ignore args starting with underscore
     if(name.startsWith('_')) return;
 
     // Is the var known and also not in the manual include list?
     if ((options && options.include && options.include.indexOf(name) === -1) && isKnown(key)) return;
 
     // Should we transform the underscore?
     var replaced = name.replace(/_/g, '-');
     if (options &&
       options.include &&
       options.include.indexOf(name) === -1 &&
       options.include.indexOf(replaced) > -1) {
       name = replaced;
     }
 
     if (isArgumentAlreadyPresent(name)) return;
 
     // Should we use equals for argv?
     if (options && options.useEqualsForValues) {
       process.argv.push('--' + name + '=' + process.env[key]);
       return;
     }
     
     process.argv.push('--' + name);
 
     if (process.env[key] !== '') {
       process.argv.push(process.env[key]);
     }
   });
 }
 
 module.exports = { assignConfigToArgs }
 