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
              "email_spam_trap_score": "none",
              "email_domain_trust": "N/A",
              "email_valid": "boolean",
              "email_disposable": "boolean",
              "email_deliverability": "high",
              "email_catch_all": "boolean",
              "email_smtp_score": 3,
              "email_overall_score": 4,
              "email_suggested_domain": "N/A",
              "email_suspect": "boolean",
              "email_dns_valid": "boolean",
              "email_spf_record": "boolean",
              "email_dmarc_record": "boolean",
              "email_leaked": "boolean",
              "email_first_name": "Mana",
              "email_common": "boolean",
              "email_generic": "boolean",
              "email_frequent_complainer": "boolean",
              "email_domain_velocity": "N/A",
              "email_user_activity": "N/A",
              "email_phone_numbers": "N/A",
              "email_risky_tld": "boolean",
              "email_message": "Success.",
              "email_success": "boolean",
              "email_timed_out": "boolean",
              "email_fraud_score": 0,
              "email_domain_age": {
                "human": "0 years ago",
                "timestamp": 'number',
                "iso": "1995-08-13T00:00:00-04:00"
              },
              "email_first_seen": {
                "human": "0 years ago",
                "timestamp": 'number',
                "iso": "2024-06-11T02:49:05-04:00"
              },
              "email_sanitized_email": "example@gmail.com",
              "email_associated_names": {
                "status": "Enterprise Plus or higher required.",
                "names": []
              },
              "email_mx_records": [
                "alt1.gmail-smtp-in.l.google.com",
                "alt3.gmail-smtp-in.l.google.com",
                "alt4.gmail-smtp-in.l.google.com"
              ],
              "email_a_records": [
                "342.1221.03.63",
                "273.428.1993.93"
              ],
              "email_result_type": "cached",
              "email_request_id": "afcsdfe"
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
              "ip_abuse_velocity": "N/A",
              "latitude": 93.13,
              "longitude": 13.53,
              "ip_country": "IN",
              "ip_region": "state",
              "ip_city": "city",
              "ip_zip_code": "N/A",
              "ip_time_zone": "Asia/Kolkata",
              "ip_connection_type": "N/A",
              "ip_isp": "telecom",
              "ip_organization": "telecom",
              "ip_asn": 21234,
              "ip_is_crawler": "boolean",
              "ip_success": "true",
              "ip_message": "Success",
              "ip_fraud_score": 0,
              "ip_mobile": "boolean",
              "ip_host": "000.000.000.000",
              "ip_abuse_events": [
                "Enterprise plan required to view abuse events and active proxy networks"
              ],
              "ip_request_id": "afwewe"
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
              "phone_ported": "No",
              "phone_vintage": "15 to 16 Years",
              "phone_active": "Yes",
              "phone_valid": "Yes",
              "phone_region": "state",
              "phone_carrier": "telecompany",
              "phone_roaming": "No"
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
        responses: { 200: { description: "Successful response" } }
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
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "pan-adv",
        method: "POST",
        path: "/api/v1/secondservice/pan-adv",
        title: "PAN Advance Validation",
        description: "Advanced PAN validation.",
        parameters: [],
        requestBody: { pan: "string" },
        responses: { 200: { description: "Successful response" } }
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
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "apivoid-blacklist",
        method: "POST",
        path: "/api/v1/thirdservice/blacklist_engine",
        title: "Blacklist Engine",
        description: "Check IP against blacklist engines.",
        parameters: [],
        requestBody: { ip: "string" },
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "apivoid-ip-details",
        method: "POST",
        path: "/api/v1/thirdservice/ip_details",
        title: "IP Details",
        description: "Retrieve comprehensive details for an IP.",
        parameters: [],
        requestBody: { ip: "string" },
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "apivoid-domain-info",
        method: "POST",
        path: "/api/v1/thirdservice/domain-info-api",
        title: "Domain Info API",
        description: "Fetch information about a specific domain.",
        parameters: [],
        requestBody: { domain: "string" },
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "apivoid-domain-age",
        method: "POST",
        path: "/api/v1/thirdservice/domain-age-api",
        title: "Domain Age API",
        description: "Check the registration age of a domain.",
        parameters: [],
        requestBody: { domain: "string" },
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "apivoid-email",
        method: "POST",
        path: "/api/v1/thirdservice/email",
        title: "Email Validation API",
        description: "Assess email reputation via API Void.",
        parameters: [],
        requestBody: { email: "string" },
        responses: { 200: { description: "Successful response" } }
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
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "ip-probe",
        method: "POST",
        path: "/api/v1/fourthservice/ip-probe",
        title: "IP Probe",
        description: "Execute a detailed IP probe.",
        parameters: [],
        requestBody: { ip: "string" },
        responses: { 200: { description: "Successful response" } }
      },
      {
        id: "ip-blocklist",
        method: "POST",
        path: "/api/v1/fourthservice/ip-blocklist",
        title: "IP Blocklist Check",
        description: "Check if an IP is blocklisted.",
        parameters: [],
        requestBody: { ip: "string" },
        responses: { 200: { description: "Successful response" } }
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
