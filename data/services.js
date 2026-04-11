export const services = [
  {
    id: "firstservice",
    name: "First Service",
    description: "checking phone email and ip validation and behaviour.",
    endpoints: [
      {
        id: "phone",
        method: "POST",
        path: "/api/v1/firstservice/phone",
        title: "Phone Validation",
        description: "Check if a phone number is valid and retrieve its reputation.",
        parameters: [],
        requestBody: {
          phone: "string"
        },
        responses: {
          200: {
            description: "Phone data fetched successfully",
            body: {
              "phone_valid": "boolean",
              "phone_active": "boolean",
              "phone_recent_abuse": "boolean",
              "phone_dialing_code": 91,
              "phone_carrier": "tele company",
              "phone_region": "state",
              "phone_mnc": "00",
              "phone_mcc": "000",
              "phone_leaked": "boolean",
              "phone_name": "N/A",
              "phone_associated_emails": "N/A",
              "phone_user_activity": "N/A",
              "phone_sms_email": "919123456789@telecompany.com",
              "phone_sms_domain": "telecompany.com",
              "phone_country": "IN",
              "phone_number_recycling": "N/A",
              "phone_tcpa_blacklist": "boolean",
              "phone_message": "Phone is valid.",
              "phone_success": "boolean",
              "phone_formatted": "+919123456789",
              "phone_local_format": "09123456789",
              "phone_fraud_score": 0,
              "phone_VOIP": "boolean",
              "phone_prepaid": "boolean",
              "phone_risky": "boolean",
              "phone_line_type": "Wireless",
              "phone_city": "N/A",
              "phone_zip_code": "N/A",
              "phone_active_status": "N/A",
              "phone_spammer": "boolean",
              "phone_request_id": "4sfswesde",
              "phone_timezone": "Asia/Kolkata",
              "phone_do_not_call": "boolean",
              "phone_accurate_country_code": "boolean",
              "phone_ported": "boolean",
              "phone_vintage": "0 to 0 Years",
              "phone_roaming": "boolean"
            }
          }
        }
      },

      {
        id: "email",
        method: "POST",
        path: "/api/v1/firstservice/email",
        title: "Email Validation",
        description: "Check if an email is valid and retrieve its reputation.",
        parameters: [],
        requestBody: {
          email: "string"
        },
        responses: {
          200: {
            description: "Email data fetched successfully",
            body: {
              "email_recent_abuse": "boolean",
              "email_honeypot": "boolean",
              "email_spam_trap_score": "string",
              "email_domain_trust": "string",
              "email_valid": "boolean",
              "email_disposable": "boolean",
              "email_deliverability": "string",
              "email_catch_all": "boolean",
              "email_smtp_score": "integer",
              "email_overall_score": "integer",
              "email_suggested_domain": "string",
              "email_suspect": "boolean",
              "email_dns_valid": "boolean",
              "email_spf_record": "boolean",
              "email_dmarc_record": "boolean",
              "email_leaked": "boolean",
              "email_first_name": "string",
              "email_common": "boolean",
              "email_generic": "boolean",
              "email_frequent_complainer": "boolean",
              "email_domain_velocity": "string",
              "email_user_activity": "string",
              "email_phone_numbers": "string",
              "email_risky_tld": "boolean",
              "email_message": "string",
              "email_success": "boolean",
              "email_timed_out": "boolean",
              "email_fraud_score": "integer",
              "email_domain_age": {
                "human": "string",
                "timestamp": 'number',
                "iso": "string"
              },
              "email_first_seen": {
                "human": "string",
                "timestamp": 'number',
                "iso": "string"
              },
              "email_sanitized_email": "string",
              "email_associated_names": {
                "status": "string",
                "names": [
                  "string"
                ]
              },
              "email_mx_records": [
                "string"
              ],
              "email_a_records": [
                "string"
              ],
              "email_result_type": "string",
              "email_request_id": "string"
            }
          }
        }
      },
      {
        id: "ip",
        method: "POST",
        path: "/api/v1/firstservice/ip",
        title: "IP Validation",
        description: "Check IP address reputation.",
        parameters: [],
        requestBody: {
          ip: "string"
        },
        responses: {
          200: {
            description: "IP data fetched successfully",
            body: {
              "ip_recent_fraud": "boolean",
              "ip_vpn": "boolean",
              "ip_active_vpn": "boolean",
              "ip_tor": "boolean",
              "ip_active_tor": "boolean",
              "ip_proxy": "boolean",
              "ip_bot_status": "boolean",
              "ip_abuse_velocity": "string",
              "latitude": "integer",
              "longitude": "integer",
              "ip_country": "string",
              "ip_region": "string",
              "ip_city": "string",
              "ip_zip_code": "string",
              "ip_time_zone": "string",
              "ip_connection_type": "string",
              "ip_isp": "string",
              "ip_organization": "string",
              "ip_asn": "integer",
              "ip_is_crawler": "boolean",
              "ip_success": "boolean",
              "ip_message": "string"  ,
              "ip_fraud_score": "integer",
              "ip_mobile": "boolean",
              "ip_host": "string",
              "ip_abuse_events": [
                "string"
              ],
              "ip_request_id": "string"
            }
          }
        }
      }
    ]
  },
  {
    id: "secondservice",
    name: "Second Service",
    description: "various document verifications and user identity checks.",
    endpoints: [
      {
        id: "phone-number",
        method: "POST",
        path: "/api/v1/secondservice/phone-number",
        title: "Phone Number Check",
        description: "Fetch details using phone number .",
        parameters: [],
        requestBody: { mobile: "string" },
        responses: {
          200: {
            description: "IP data fetched successfully",
            body: {
              "phone_ported": "string",
              "phone_vintage": "string",
              "phone_active": "string",
              "phone_valid": "string",
              "phone_region": "string",
              "phone_carrier": "string",
              "phone_roaming": "string"
            }
          }
        }
      },
      {
        id: "fetch-voter-id",
        method: "POST",
        path: "/api/v1/secondservice/fetch-voter-id",
        title: "Fetch Voter ID",
        description: "Verify Voter ID details .",
        parameters: [],
        requestBody: { voterid: "string" },
        responses: { 
          200: { 
            description: "Successful response", 
            body: {
                "document_type": "string",
                "document_id": "string",
                "name": "string",
                "father_name": "string",
                "gender": "string",
                "age": "integer",
                "district": "string",
                "state": "string",
                "assembly_constituency_number": "integer",
                "assembly_constituency_name": "string",
                "parliamentary_constituency_number": "integer",
                "parliamentary_constituency_name": "string",
                "part_number": "integer",
                "part_name": "string",
                "serial_number": "integer",
                "polling_station": "string"
            }
          }
        }
      },
      {
        id: "uan-profile",
        method: "POST",
        path: "/api/v1/secondservice/uan-profile-details",
        title: "UAN Profile Details",
        description: "Fetch UAN profile details.",
        parameters: [],
        requestBody: { uan: "string" },
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "uan-mobile",
        method: "POST",
        path: "/api/v1/secondservice/uan-mobile-api",
        title: "UAN Mobile API",
        description: "Fetch UAN mobile data.",
        parameters: [],
        requestBody: { mobile: "string" },
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "alternate-addresses",
        method: "POST",
        path: "/api/v1/secondservice/alternate-addresses",
        title: "Mobile Prefill / Alternate Addresses",
        description: "Fetch alternate addresses using mobile prefill.",
        parameters: [],
        requestBody: { mobile: "string" },
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "nationalid",
        method: "POST",
        path: "/api/v1/secondservice/nationalid",
        title: "National ID Verification",
        description: "Verify National ID details.",
        parameters: [],
        requestBody: { mobile: { type: "string" }, firstname: { type: "string" }, lastname: { type: "string" } },
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "upi-id",
        method: "POST",
        path: "/api/v1/secondservice/upi-id-fetched",
        title: "UPI ID Fetch",
        description: "Fetch and verify UPI ID details.",
        parameters: [],
        requestBody: { mobile: "string" },
        responses: { 
          200: { 
            description: "Successful response", 
            body: {
              "upi_id": "string",
              "name": "string",
              "status": "string"
            }
          } 
        }
      },
      {
        id: "pan-adv",
        method: "POST",
        path: "/api/v1/secondservice/pan-adv",
        title: "PAN Advance Validation",
        description: "Advanced PAN validation.",
        parameters: [],
        requestBody: { pan: "string" },
        responses: { 
          200: { 
            description: "Successful response", 
            body: {
              "document_type": "string",
              "document_id": "string",
              "name": "string",
              "first_name": "string",
              "last_name": "string",
              "category": "string",
              "category_type": "string",
              "is_individual": "boolean",
              "individual_tax_compliance_status": "string",
              "aadhaar_linked": "boolean"
            }
          } 
        }
      },
      {
        id: "pan-phone",
        method: "POST",
        path: "/api/v1/secondservice/pan-by-phone",
        title: "PAN by Phone",
        description: "Fetch PAN details associated with a phone number.",
        parameters: [],
        requestBody: { phone: "string" },
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "links-mobilepan",
        method: "POST",
        path: "/api/v1/secondservice/links-by-mobilepan",
        title: "Check Phone/PAN Links",
        description: "Check linkages between mobile number and PAN.",
        parameters: [],
        requestBody: { phone: "string", pan: "string" },
        responses: { 200: { description: "Successful response" } }
      }
    ]
  },
  {
    id: "thirdservice",
    name: "Third Service",
    description: "for IP and Domain reputation analytics.",
    endpoints: [
      {
        id: "ip-adv",
        method: "POST",
        path: "/api/v1/thirdservice/ip_adv",
        title: "IP Advanced Reputation",
        description: "Detailed IP reputation check.",
        parameters: [],
        requestBody: { ip: "string" },
        responses: { 
          200: { 
            description: "Successful response",
            body: {
              "blacklist": {
                  "engines": {
                      "0": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "1": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "2": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "3": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "4": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "5": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "6": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "7": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "8": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "9": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "10": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "11": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "12": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "13": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "14": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "15": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "16": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "17": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "18": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "19": {
                          "name": "string",
                          "detected": "boolean"
                      },
                      "20": {
                          "name": "string",
                          "detected": "boolean"
                      },
                  },
                  "detections": "integer",
                  "engines_count": "integer",
                  "detection_rate": "integer",
                  "scan_time_ms": "integer"
              },
              "continent_code": "string",
              "continent_name": "string",
              "country_code": "string",
              "country_name": "string",
              "currency": "string",
              "currency_name": "string",
              "currency_name_plural": "string",
              "currency_symbol": "string",
              "currency_symbol_native": "string",
              "calling_code": "string",
              "emoji_flag": "string",
              "emoji_flag_unicode": "string",
              "region_name": "string",
              "city_name": "string",
              "latitude": "float",
              "longitude": "float",
              "isp": "string",
              "asn": "string",
              "is_bogon": "boolean",
              "is_spamhaus_drop": "boolean",
              "is_ai_crawler": "boolean",
              "is_google_bot": "boolean",
              "is_web_crawler": "boolean",
              "related_service_name": "string",
              "related_service_domain": "string",
              "related_service_type": "string",
              "is_major_provider_spf_ip": "boolean",
              "is_public_dns": "boolean",
              "cloud_provider": "string",
              "cloud_provider_domain": "string",
              "aws_service": "string",
              "is_google_service": "boolean",
              "edge_service": "string",
              "edge_service_domain": "string",
              "is_satellite": "boolean",
              "asname": "string",
              "route": "string",
              "status": "string",
              "org": "string",
              "created": "string",  
              "days_since_created": "integer",
              "updated": "string",
              "days_since_updated": "integer",
              "address": "string",
              "abuse_email": "string",
              "domain": "string",
              "total_ipv4_prefixes": "integer",
              "total_ipv4_ips": "integer",
              "total_ipv6_prefixes": "integer",
              "type": "string",
              "rir": "string",
              "is_proxy": "boolean",
              "is_webproxy": "boolean",
              "is_residential_proxy": "boolean",
              "is_vpn": "boolean",
              "is_hosting": "boolean",
              "is_relay": "boolean",
              "is_tor": "boolean"
            }
          } 
        }
      },
      {
        id: "apivoid-blacklist",
        method: "POST",
        path: "/api/v1/thirdservice/blacklist_engine",
        title: "Blacklist Engine",
        description: "Check IP against blacklist engines.",
        parameters: [],
        requestBody: { ip: "string" },
        responses: { 
          200: { 
            description: "Successful response", 
            body: {
                      "engines": {
            "0": {
                "name": "string",
                "detected": "boolean"
            },
            "1": {
                "name": "string",
                "detected": "boolean"
            },
            "2": {
                "name": "string",
                "detected": "boolean"
            },
            "3": {
                "name": "string",
                "detected": "boolean"
            },
            "4": {
                "name": "string",
                "detected": "boolean"
            },
            "5": {
                "name": "string",
                "detected": "boolean"
            },
            "6": {
                "name": "string",
                "detected": "boolean"
            },
            "7": {
                "name": "string",
                "detected": "boolean"
            },
            "8": {
                "name": "string",
                "detected": "boolean"
            },
            "9": {
                "name": "string",
                "detected": "boolean"
            },
            "10": {
                "name": "string",
                "detected": "boolean"
            },
            "11": {
                "name": "string",
                "detected": "boolean"
            },
            "12": {
                "name": "string",
                "detected": "boolean"
            },
            "13": {
                "name": "string",
                "detected": "boolean"
            },
            "14": {
                "name": "string",
                "detected": "boolean"
            },
            "15": {
                "name": "string",
                "detected": "boolean"
            },
            "16": {
                "name": "string",
                "detected": "boolean"
            },
            "17": {
                "name": "string",
                "detected": "boolean"
            },
            "18": {
                "name": "string",
                "detected": "boolean"
            },
            "19": {
                "name": "string",
                "detected": "boolean"
            },
            "20": {
                "name": "string",
                "detected": "boolean"
            },
        },
        "detections": "integer",
        "engines_count": "integer",
        "detection_rate": "integer",
        "scan_time_ms": "integer"
            }
          } 
        }
      },
      {
        id: "apivoid-ip-details",
        method: "POST",
        path: "/api/v1/thirdservice/ip_details",
        title: "IP Details",
        description: "Retrieve comprehensive details for an IP.",
        parameters: [],
        requestBody: { ip: "string" },
        responses: { 
          200: { 
            description: "Successful response",
            body: {
              "continent_code": "string",
              "continent_name": "string",
              "country_code": "string",
              "country_name": "string",
              "currency": "string",
              "currency_name": "string",
              "currency_name_plural": "string",
              "currency_symbol": "string",
              "currency_symbol_native": "string",
              "calling_code": "integer",
              "emoji_flag": "string",
              "emoji_flag_unicode": "string",
              "region_name": "string",
              "city_name": "string",
              "latitude": "float",
              "longitude": "float",
              "isp": "string",
              "asn": "string",
              "related_service_name": "string",
              "related_service_domain": "string",
              "related_service_type": "string",
              "is_major_provider_spf_ip": "boolean",
              "is_public_dns": "boolean",
              "is_cloud_provider": "boolean",
              "cloud_provider_domain": "string",
              "aws_service": "string",
              "is_google_service": "boolean",
              "edge_service": "string",
              "edge_service_domain": "string",
              "asname": "string",
              "route": "string",
              "status": "string",
              "org": "string",
              "created": "date",
              "days_since_created": "integer",
              "updated": "date",
              "days_since_updated": "integer",
              "address": "string",
              "abuse_contact": "string",
              "domain": "string",
              "total_ipv4_prefixes": "integer",
              "total_ipv4_ips": "integer",
              "total_ipv6_prefixes": "integer",
              "type": "string",
              "rir": "string",
              "is_proxy": "boolean",
              "is_webproxy": "boolean",
              "is_residential_proxy": "boolean",
              "is_vpn": "boolean",
              "is_hosting": "boolean",
              "is_relay": "boolean",
              "is_tor": "boolean",
              "is_bogon": "boolean",
              "is_spamhaus_drop": "boolean",
              "is_ai_crawler": "boolean",
              "is_google_bot": "boolean",
              "is_web_crawler": "boolean",
              "is_satellite": "boolean",
          }
         } }
      },
      {
        id: "apivoid-domain-info",
        method: "POST",
        path: "/api/v1/thirdservice/domain-info-api",
        title: "Domain Info API",
        description: "Fetch information about a specific domain.",
        parameters: [],
        requestBody: { domain: "string" },
        responses: { 
          200: { 
            description: "Successful response",
            body:{
              "host": "string",
              "debug_message": "string",
              "domain_age_found": "boolean",
              "domain_registered": "string",
              "domain_creation_date": "date",
              "domain_age_in_days": "integer",
              "domain_age_in_months": "integer",
              "domain_age_in_years": "integer",
              "registrar": "string",
              "registrar_url": "string",
              "registrar_abuse_email": "string",
              "registrar_abuse_form": "string",
              "registrar_twitter": "string",
              "owner_organization": "string",
              "owner_country": "string",
              "owner_state_province": "string",
              "owner_email_hash": "string",
              "owner_email_domain": "string",
              "owner_free_email": "boolean",
              "owner_private_person": "boolean",
              "whois_data_hidden": "boolean",
              "dnssec": "string",
              "nameservers": [
                {
                  "name": "string",
                  "ipv4": "string",
                  "ipv6": "string"
                }
              ]
            }
          } 
        }
      },
      {
        id: "apivoid-domain-age",
        method: "POST",
        path: "/api/v1/thirdservice/domain-age-api",
        title: "Domain Age API",
        description: "Check the registration age of a domain.",
        parameters: [],
        requestBody: { domain: "string" },
        responses: { 
          200: { 
            description: "Successful response",
            body:{
              "host": "string",
              "debug_message": "string",
              "domain_age_found": "boolean",
              "domain_registered": "string",
              "domain_creation_date": "date",
              "domain_age_in_days": "integer",
              "domain_age_in_months": "integer",
              "domain_age_in_years": "integer"
            }
          } 
        }
      },
      {
        id: "apivoid-email",
        method: "POST",
        path: "/api/v1/thirdservice/email",
        title: "Email Validation API",
        description: "Assess email reputation via API Void.",
        parameters: [],
        requestBody: { email: "string" },
        responses: { 
          200: { 
            description: "Successful response",
          body:{
            "email": "string",
            "role_address": "boolean",
            "system_address": "boolean",
            "noreply_address": "boolean",
            "suspicious_username": "boolean",
            "dirty_words_username": "boolean",
            "suspicious_email": "boolean",
            "email_length": "integer",
            "username_length": "integer",
            "domain_length": "integer",
            "username_has_only_digits": "boolean",
            "username_dots_count": "integer",
            "username_underscores_count": "integer",
            "username_hyphens_count": "integer",
            "username_digits_count": "integer",
            "username_letters_count": "integer",
            "domain": "string",
            "root_domain": "string",
            "tld": "string",
            "valid_tld": "boolean",
            "public_domain": "boolean",
            "disposable": "boolean",
            "email_forwarder": "boolean",
            "has_a_records": "boolean",
            "has_mx_records": "boolean",
            "has_txt_records": "boolean",
            "has_spf_records": "boolean",
            "dmarc_configured": "boolean",
            "dmarc_enforced": "boolean",
            "is_spoofable": "boolean",
            "free_email": "boolean",
            "russian_free_email": "boolean",
            "china_free_email": "boolean",
            "suspicious_domain": "boolean",
            "dirty_words_domain": "boolean",
            "domain_popular": "boolean",
            "risky_tld": "boolean",
            "police_domain": "boolean",
            "government_domain": "boolean",
            "educational_domain": "boolean",
            "student_email": "boolean",
            "should_block": "boolean",
            "email_smtp_status": "string",
            "email_typos_fixed": "boolean",
            "email_verified": "boolean",
            "email_is_catch_all": "boolean",
            "email_domain_status": "string",
            "email_is_personal": "boolean"
          } 
        } }
      }
    ]
  },
  {
    id: "fourthservice",
    name: "Fourth Service",
    description: "IP blocking, probe, and browser bot detection.",
    endpoints: [
      {
        id: "browser-bot",
        method: "POST",
        path: "/api/v1/fourthservice/browser-bot",
        title: "Browser Bot Info",
        description: "Detect browser bots and properties.",
        parameters: [],
        requestBody: { ip: "string", user_agent: "string" },
        responses: { 
          200: { 
            description: "Successful response", 
            body: {    
              "security-details": "object",
              "exec-results": "[]",
              "mime-type": "string",
              "response-headers": "object",
              "content-size": "integer",
              "language-code": "string",
              "load-time": "integer",
              "server-ip": "string",
              "title": "string",
              "url": "string",
              "content": "string",
              "http-status-code": "integer",
              "http-redirect-url": "string",
              "is-error": "boolean",
              "error-message": "string",
              "is-secure": "boolean",
              "elements": "[]",
              "server-hostname": "string",
              "url-valid": "boolean",
              "url-components": "object",
              "http-status-message": "string",
              "is-http-ok": "boolean",
              "is-timeout": "boolean",
              "is-http-redirect": "boolean"
            } 
          } 
        }
      },
      {
        id: "ip-probe",
        method: "POST",
        path: "/api/v1/fourthservice/ip-probe",
        title: "IP Probe",
        description: "Execute a detailed IP probe.",
        parameters: [],
        requestBody: { ip: "string" },
        responses: { 
          200: { 
            description: "Successful response",
            body: {
              "region-code": "string",
              "country": "string",
              "country-code": "string",
              "provider-domain": "string",
              "city": "string",
              "vpn-domain": "string",
              "is-vpn": "boolean",
              "as-cidr": "string",
              "valid": "boolean",
              "provider-type": "string",
              "hostname": "string",
              "as-age": "string",
              "continent-code": "string",
              "is-bogon": "boolean",
              "ip": "string",
              "as-country-code": "string",
              "provider-description": "string",
              "as-country-code3": "string",
              "is-v4-mapped": "boolean",
              "is-isp": "boolean",
              "provider-website": "string",
              "as-description": "string",
              "is-hosting": "boolean",
              "as-domains": [
                "string"
              ],
              "host-domain": "string",
              "is-proxy": "boolean",
              "currency-code": "string",
              "region": "string",
              "asn": "string",
              "country-code3": "string",
              "is-v6": "boolean"
            }
          } 
        }
      },
      {
        id: "ip-blocklist",
        method: "POST",
        path: "/api/v1/fourthservice/ip-blocklist",
        title: "IP Blocklist Check",
        description: "Check if an IP is blocklisted.",
        parameters: [],
        requestBody: { ip: "string" },
        responses: { 
          200: { 
            description: "Successful response",
            body: { 
              "is-hijacked": "boolean",
              "is-spider": "boolean",
              "is-tor": "boolean",
              "is-dshield": "boolean",
              "is-vpn": "boolean",
              "ip": "string",
              "is-spyware": "boolean",
              "is-spam-bot": "boolean",
              "blocklists": [
                "string"
              ],
              "last-seen": "integer",
              "is-bot": "boolean",
              "sensors": [
                "string"
              ],
              "list-count": "integer",
              "cidr": "string",
              "is-listed": "boolean",
              "is-proxy": "boolean",
              "is-malware": "boolean",
              "is-exploit-bot": "boolean"
            } 
          } 
        }
      }
    ]
  },
  {
    id: "fifthservice",
    name: "Fifth Service",
    description: " geospatial service integrations.",
    endpoints: [
      {
        id: "reverse-geo",
        method: "POST",
        path: "/api/v1/fifthservice/reverse-geo",
        title: "Reverse Geocoding",
        description: "Retrieve geolocation details through coordinates.",
        parameters: [],
        requestBody: { lat: "number", lng: "number" },
        responses: { 200: { description: "Successful location fetching" } }
      }
    ]
  }
];
