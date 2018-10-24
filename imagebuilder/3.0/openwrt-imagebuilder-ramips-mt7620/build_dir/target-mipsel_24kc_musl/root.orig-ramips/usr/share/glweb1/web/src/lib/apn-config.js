define(function () {
    return {
        "apns": {
            "-version": "8",
            "apn": [
                {
                    "-carrier": "Test Internet",
                    "-mcc": "001",
                    "-mnc": "01",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun,supl",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Test FOTA",
                    "-mcc": "001",
                    "-mnc": "01",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Test IMS",
                    "-mcc": "001",
                    "-mnc": "01",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Test CBS",
                    "-mcc": "001",
                    "-mnc": "01",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Test Internet",
                    "-mcc": "001",
                    "-mnc": "010",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun,supl",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Test FOTA",
                    "-mcc": "001",
                    "-mnc": "010",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Test IMS",
                    "-mcc": "001",
                    "-mnc": "010",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Test CBS",
                    "-mcc": "001",
                    "-mnc": "010",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Virgin Mobile US",
                    "-mcc": "200",
                    "-mnc": "053",
                    "-apn": "0",
                    "-mmsproxy": "205.239.233.136",
                    "-mmsport": "81",
                    "-mmsc": "http://mmsc.vmobl.com:8088/mms?",
                    "-type": "mms"
                },
                {
                    "-carrier": "Cosmote GR",
                    "-mcc": "202",
                    "-mnc": "01",
                    "-apn": "Internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Cosmote GR MMS",
                    "-mcc": "202",
                    "-mnc": "01",
                    "-apn": "Mms",
                    "-mmsc": "195.167.65.220:8002",
                    "-mmsproxy": "10.10.10.20",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Cosmote Wireless Internet",
                    "-mcc": "202",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Cosmote MMS",
                    "-mcc": "202",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-mmsc": "http://195.167.65.220:8002",
                    "-mmsproxy": "10.10.10.20",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vf Internet",
                    "-mcc": "202",
                    "-mnc": "05",
                    "-apn": "internet.vodafone.gr",
                    "-user": "user",
                    "-password": "pass",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vf Internet Corporate",
                    "-mcc": "202",
                    "-mnc": "05",
                    "-apn": "internet",
                    "-user": "user",
                    "-password": "pass",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone GR-MMS",
                    "-mcc": "202",
                    "-mnc": "05",
                    "-apn": "mms.vodafone.net",
                    "-user": "user",
                    "-password": "pass",
                    "-mmsc": "http://mms.vodafone.gr",
                    "-mmsproxy": "213.249.19.49",
                    "-mmsport": "5080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone GR",
                    "-mcc": "202",
                    "-mnc": "05",
                    "-apn": "surfonly.vodafone.gr",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone GR Prepaid",
                    "-mcc": "202",
                    "-mnc": "05",
                    "-apn": "webkarta.vodafone.gr",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Q-Telecom MMS GPRS",
                    "-mcc": "202",
                    "-mnc": "09",
                    "-apn": "q-mms.myq.gr",
                    "-mmsc": "http://mms.myq.gr",
                    "-mmsproxy": "192.168.80.134",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "WIND GR",
                    "-mcc": "202",
                    "-mnc": "10",
                    "-apn": "gint.b-online.gr",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "WIND GR MMS",
                    "-mcc": "202",
                    "-mnc": "10",
                    "-apn": "mnet.b-online.gr",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://192.168.200.95/servlets/mms",
                    "-mmsproxy": "192.168.200.11",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tele2 NL",
                    "-mcc": "204",
                    "-mnc": "02",
                    "-apn": "internet.tele2.nl",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tele2 MMS NL",
                    "-mcc": "204",
                    "-mnc": "02",
                    "-apn": "internet.tele2.nl",
                    "-mmsc": "http://mmsc.tele2.nl",
                    "-mmsproxy": "193.12.40.64",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "VZW Roaming Internet",
                    "-mcc": "204",
                    "-mnc": "04",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun,supl",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Roaming FOTA",
                    "-mcc": "204",
                    "-mnc": "04",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Roaming IMS",
                    "-mcc": "204",
                    "-mnc": "04",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Roaming CBS",
                    "-mcc": "204",
                    "-mnc": "04",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Vodafone NL",
                    "-mcc": "204",
                    "-mnc": "04",
                    "-apn": "live.vodafone.com",
                    "-user": "vodafone",
                    "-password": "vodafone",
                    "-mmsc": "http://mmsc.mms.vodafone.nl",
                    "-mmsproxy": "192.168.251.150",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "hollandsnieuwe int.",
                    "-mcc": "204",
                    "-mnc": "04",
                    "-apn": "data.dataxs.mobi",
                    "-type": "default"
                },
                {
                    "-carrier": "Vodafone MMS Business",
                    "-mcc": "204",
                    "-mnc": "04",
                    "-apn": "office.vodafone.nl",
                    "-user": "vodafone",
                    "-password": "vodafone",
                    "-mmsc": "http://mmsc.mms.vodafone.nl",
                    "-mmsproxy": "192.168.251.150",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "�й�����NET����",
                    "-mcc": "204",
                    "-mnc": "04",
                    "-apn": "ctnet",
                    "-user": "ctnet@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "�й�����WAP����",
                    "-mcc": "204",
                    "-mnc": "04",
                    "-apn": "ctwap",
                    "-user": "ctwap@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-proxy": "10.0.0.200",
                    "-port": "80",
                    "-mmsproxy": "10.0.0.200",
                    "-mmsport": "80",
                    "-mmsc": "http://mmsc.vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun,mms",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "KPN",
                    "-mcc": "204",
                    "-mnc": "08",
                    "-apn": "internet",
                    "-user": "kpn",
                    "-password": "gprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "KPN",
                    "-mcc": "204",
                    "-mnc": "08",
                    "-apn": "portalmmm.nl",
                    "-mmsc": "http://mp.mobiel.kpn/mmsc",
                    "-mmsproxy": "10.10.100.20",
                    "-mmsport": "5080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "KPN MMS",
                    "-mcc": "204",
                    "-mnc": "08",
                    "-apn": "portalmmm.nl",
                    "-proxy": "10.10.100.20",
                    "-port": "5080",
                    "-mmsc": "http://mp.mobiel.kpn/mmsc",
                    "-mmsproxy": "10.10.100.20",
                    "-mmsport": "5080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telfort",
                    "-mcc": "204",
                    "-mnc": "12",
                    "-apn": "internet",
                    "-proxy": "193.113.200.195",
                    "-port": "8080",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "193.113.200.195",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "T-Mobile NL",
                    "-mcc": "204",
                    "-mnc": "16",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "T-Mobile NL-MMS",
                    "-mcc": "204",
                    "-mnc": "16",
                    "-apn": "mms",
                    "-user": "tmobilemms",
                    "-password": "tmobilemms",
                    "-server": "*",
                    "-mmsc": "http://t-mobilemms",
                    "-mmsproxy": "010.010.010.011",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile NL",
                    "-mcc": "204",
                    "-mnc": "16",
                    "-apn": "smartsites.t-mobile",
                    "-user": "*",
                    "-password": "*",
                    "-server": "*",
                    "-mmsc": "http://t-mobilemms",
                    "-mmsproxy": "010.010.010.011",
                    "-mmsport": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange NL",
                    "-mcc": "204",
                    "-mnc": "20",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange NL MMS",
                    "-mcc": "204",
                    "-mnc": "20",
                    "-apn": "mms",
                    "-mmsc": "http://mms.orange.nl:8002",
                    "-mmsproxy": "10.250.255.183",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "rabo.plus",
                    "-mcc": "204",
                    "-mnc": "20",
                    "-apn": "rabo.plus",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Proximus MMS",
                    "-mcc": "206",
                    "-mnc": "01",
                    "-apn": "event.proximus.be",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mmsc.proximus.be/mms",
                    "-mmsproxy": "10.55.14.75",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Proximus Internet",
                    "-mcc": "206",
                    "-mnc": "01",
                    "-apn": "internet.proximus.be",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Eastlink Internet",
                    "-mcc": "206",
                    "-mnc": "01",
                    "-apn": "wisp.mobi.eastlink.ca",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Eastlink MMS",
                    "-mcc": "206",
                    "-mnc": "01",
                    "-apn": "mms.mobi.eastlink.ca",
                    "-mmsc": "http://mmss.mobi.eastlink.ca",
                    "-mmsproxy": "10.232.12.49",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telenet Intl Roam",
                    "-mcc": "206",
                    "-mnc": "01",
                    "-apn": "telenetwap.be",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telenet MMS Intl Roam",
                    "-mcc": "206",
                    "-mnc": "01",
                    "-apn": "mms.be",
                    "-mmsc": "http://mmsc.telenet.be",
                    "-mmsproxy": "195.130.149.100",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telenet",
                    "-mcc": "206",
                    "-mnc": "05",
                    "-apn": "telenetwap.be",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telenet MMS",
                    "-mcc": "206",
                    "-mnc": "05",
                    "-apn": "mms.be",
                    "-mmsc": "http://mmsc.telenet.be",
                    "-mmsproxy": "195.130.149.100",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobistar",
                    "-mcc": "206",
                    "-mnc": "10",
                    "-apn": "mworld.be",
                    "-port": "8080",
                    "-authenticationtype": "PAP",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Mobistar MMS",
                    "-mcc": "206",
                    "-mnc": "10",
                    "-apn": "mms.be",
                    "-mmsc": "http://mmsc.mobistar.be",
                    "-mmsproxy": "212.65.63.143",
                    "-authenticationtype": "PAP",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BASE Belgium",
                    "-mcc": "206",
                    "-mnc": "20",
                    "-apn": "gprs.base.be",
                    "-user": "base",
                    "-password": "base",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BASE MMS Belgium",
                    "-mcc": "206",
                    "-mnc": "20",
                    "-apn": "mms.base.be",
                    "-user": "base",
                    "-password": "base",
                    "-mmsc": "http://mmsc.base.be",
                    "-mmsproxy": "217.72.235.1",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobile Vikings",
                    "-mcc": "206",
                    "-mnc": "20",
                    "-apn": "web.be",
                    "-user": "web",
                    "-password": "web",
                    "-authenticationtype": "PAP",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Mobile Vikings MMS",
                    "-mcc": "206",
                    "-mnc": "20",
                    "-apn": "mms.be",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mmsc.be",
                    "-mmsproxy": "217.72.235.1",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Virgin",
                    "-mcc": "208",
                    "-mnc": "01",
                    "-apn": "ofnew.fr",
                    "-user": "orange",
                    "-password": "orange",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange Internet",
                    "-mcc": "208",
                    "-mnc": "01",
                    "-apn": "orange.fr",
                    "-user": "orange",
                    "-password": "orange",
                    "-authtype": "0",
                    "-type": "dun"
                },
                {
                    "-carrier": "Orange World",
                    "-mcc": "208",
                    "-mnc": "01",
                    "-apn": "orange",
                    "-user": "orange",
                    "-password": "orange",
                    "-authtype": "2",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "208",
                    "-mnc": "01",
                    "-apn": "orange.acte",
                    "-user": "orange",
                    "-password": "orange",
                    "-mmsc": "http://mms.orange.fr/",
                    "-mmsproxy": "192.168.10.200",
                    "-mmsport": "8080",
                    "-authtype": "2",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange Entreprise",
                    "-mcc": "208",
                    "-mnc": "01",
                    "-apn": "orange-mib",
                    "-proxy": "172.16.2.8",
                    "-port": "8000",
                    "-user": "orange",
                    "-password": "orange",
                    "-authtype": "2",
                    "-type": "default"
                },
                {
                    "-carrier": "Orange GPRS ISP",
                    "-mcc": "208",
                    "-mnc": "02",
                    "-apn": "orange.fr",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SFR MMS",
                    "-mcc": "208",
                    "-mnc": "10",
                    "-apn": "mmssfr",
                    "-mmsc": "http://mms1",
                    "-mmsproxy": "10.151.0.1",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SFR",
                    "-mcc": "208",
                    "-mnc": "10",
                    "-apn": "sl2sfr",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SFR WAP",
                    "-mcc": "208",
                    "-mnc": "10",
                    "-apn": "wapsfr",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-proxy": "195.115.25.129",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "ACCESS DATA",
                    "-mcc": "208",
                    "-mnc": "10",
                    "-apn": "websfr",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Web La Poste",
                    "-mcc": "208",
                    "-mnc": "10",
                    "-apn": "wapdebitel",
                    "-proxy": "192.168.21.3",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "NRJ Mobile FR",
                    "-mcc": "208",
                    "-mnc": "10",
                    "-apn": "fnetnrj",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "NRJ Mobile FR MMS",
                    "-mcc": "208",
                    "-mnc": "10",
                    "-apn": "mmsnrj",
                    "-mmsproxy": "010.143.156.005",
                    "-mmsport": "8080",
                    "-mmsc": "http://mmsnrj",
                    "-type": "mms"
                },
                {
                    "-carrier": "MMS",
                    "-mcc": "208",
                    "-mnc": "11",
                    "-apn": "mmssfr",
                    "-mmsc": "http://mms1",
                    "-mmsproxy": "10.151.0.1",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "ACCESS DATA",
                    "-mcc": "208",
                    "-mnc": "11",
                    "-apn": "websfr",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS",
                    "-mcc": "208",
                    "-mnc": "13",
                    "-apn": "mmssfr",
                    "-mmsc": "http://mms1",
                    "-mmsproxy": "10.151.0.1",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "ACCESS DATA",
                    "-mcc": "208",
                    "-mnc": "13",
                    "-apn": "websfr",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Free Mobile",
                    "-mcc": "208",
                    "-mnc": "15",
                    "-apn": "free",
                    "-mmsc": "http://mms.free.fr",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Free Mobile MMS",
                    "-mcc": "208",
                    "-mnc": "15",
                    "-apn": "mmsfree",
                    "-mmsc": "http://212.27.40.225",
                    "-type": "mms"
                },
                {
                    "-carrier": "Bouygues Pro",
                    "-mcc": "208",
                    "-mnc": "20",
                    "-apn": "a2bouygtel.com",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Bouygues WEB",
                    "-mcc": "208",
                    "-mnc": "20",
                    "-apn": "mmsbouygtel.com",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Bouygues Telecom",
                    "-mcc": "208",
                    "-mnc": "20",
                    "-apn": "mmsbouygtel.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Bouygues MMS",
                    "-mcc": "208",
                    "-mnc": "20",
                    "-apn": "mmsbouygtel.com",
                    "-mmsc": "http://mms.bouyguestelecom.fr/mms/wapenc",
                    "-mmsproxy": "62.201.129.226",
                    "-mmsport": "8080",
                    "-authtype": "0",
                    "-type": "mms"
                },
                {
                    "-carrier": "BouyguesGPRS ISP",
                    "-mcc": "208",
                    "-mnc": "21",
                    "-apn": "ebouygtel.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS Bouygues",
                    "-mcc": "208",
                    "-mnc": "21",
                    "-apn": "mmsbouygtel.com",
                    "-mmsc": "http://mms.bouyguestelecom.fr/mms/wapenc",
                    "-mmsproxy": "62.201.129.226",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BouyguesGPRS ISP",
                    "-mcc": "208",
                    "-mnc": "88",
                    "-apn": "ebouygtel.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS Bouygues",
                    "-mcc": "208",
                    "-mnc": "88",
                    "-apn": "mmsbouygtel.com",
                    "-mmsc": "http://mms.bouyguestelecom.fr/mms/wapenc",
                    "-mmsproxy": "62.201.129.226",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone ES-Internet",
                    "-mcc": "214",
                    "-mnc": "01",
                    "-apn": "ac.vodafone.es",
                    "-user": "vodafone",
                    "-password": "vodafone",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone",
                    "-mcc": "214",
                    "-mnc": "01",
                    "-apn": "airtelwap.es",
                    "-user": "wap@wap",
                    "-password": "wap125",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone ES",
                    "-mcc": "214",
                    "-mnc": "01",
                    "-apn": "airtelwap.es",
                    "-user": "wap@wap",
                    "-password": "wap125",
                    "-type": "supl"
                },
                {
                    "-carrier": "Vodafone ES MMS",
                    "-mcc": "214",
                    "-mnc": "01",
                    "-apn": "mms.vodafone.net",
                    "-user": "wap@wap",
                    "-password": "wap125",
                    "-mmsc": "http://mmsc.vodafone.es/servlets/mms",
                    "-mmsproxy": "212.73.32.10",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange Internet M��vil",
                    "-mcc": "214",
                    "-mnc": "03",
                    "-apn": "orangeworld",
                    "-proxy": "10.132.61.10",
                    "-port": "8080",
                    "-user": "orange",
                    "-password": "orange",
                    "-authtype": "1",
                    "-type": "default"
                },
                {
                    "-carrier": "Orange Internet PC",
                    "-mcc": "214",
                    "-mnc": "03",
                    "-apn": "internet",
                    "-user": "orange",
                    "-password": "orange",
                    "-authtype": "0",
                    "-type": "dun"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "214",
                    "-mnc": "03",
                    "-apn": "orangemms",
                    "-proxy": "172.22.188.25",
                    "-port": "8080",
                    "-user": "orange",
                    "-password": "orange",
                    "-mmsc": "http://mms.orange.es",
                    "-mmsproxy": "172.22.188.25",
                    "-mmsport": "8080",
                    "-authtype": "2",
                    "-type": "mms"
                },
                {
                    "-carrier": "Yoigo",
                    "-mcc": "214",
                    "-mnc": "04",
                    "-apn": "internet",
                    "-proxy": "010.008.000.036",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Yoigo MMS",
                    "-mcc": "214",
                    "-mnc": "04",
                    "-apn": "mms",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "193.209.134.141",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tuenti Internet",
                    "-mcc": "214",
                    "-mnc": "05",
                    "-apn": "tuenti.com",
                    "-user": "tuenti",
                    "-password": "tuenti",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tuenti MMS",
                    "-mcc": "214",
                    "-mnc": "05",
                    "-apn": "tuenti.com",
                    "-user": "tuenti",
                    "-password": "tuenti",
                    "-mmsc": "http://tuenti.com",
                    "-mmsproxy": "10.138.255.43",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "INTERNET GPRS",
                    "-mcc": "214",
                    "-mnc": "06",
                    "-apn": "airtelnet.es",
                    "-user": "vodafone",
                    "-password": "vodafone",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Pepephone Internet",
                    "-mcc": "214",
                    "-mnc": "06",
                    "-apn": "gprsmov.pepephone.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Pepephone MMS",
                    "-mcc": "214",
                    "-mnc": "06",
                    "-apn": "mms.pepephone.com",
                    "-user": "wap@wap",
                    "-password": "wap125",
                    "-mmsproxy": "212.073.032.010",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Pepephone (Public)",
                    "-mcc": "214",
                    "-mnc": "06",
                    "-apn": "gprs.pepephone.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS Vodafone",
                    "-mcc": "214",
                    "-mnc": "06",
                    "-apn": "mms.vodafone.net",
                    "-user": "wap@wap",
                    "-password": "wap125",
                    "-mmsc": "http://mmsc.vodafone.es/servlets/mms",
                    "-mmsproxy": "212.73.32.10",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar ES",
                    "-mcc": "214",
                    "-mnc": "07",
                    "-apn": "movistar.es",
                    "-user": "MOVISTAR",
                    "-password": "MOVISTAR",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Movistar ES-MMS",
                    "-mcc": "214",
                    "-mnc": "07",
                    "-apn": "telefonica.es",
                    "-user": "telefonica",
                    "-password": "telefonica",
                    "-mmsc": "http://mms.movistar.com",
                    "-mmsproxy": "10.138.255.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Simyo ES",
                    "-mcc": "214",
                    "-mnc": "19",
                    "-apn": "gprs-service.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Simyo ES-MMS",
                    "-mcc": "214",
                    "-mnc": "19",
                    "-apn": "gprs-service.com",
                    "-mmsc": "http://217.18.32.180:8080",
                    "-mmsproxy": "217.18.32.181",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Jazztel",
                    "-mcc": "214",
                    "-mnc": "21",
                    "-apn": "jazzinternet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Jazztel MMS",
                    "-mcc": "214",
                    "-mnc": "21",
                    "-apn": "jazzmms",
                    "-mmsc": "http://jazztelmms.com:8081",
                    "-mmsproxy": "217.18.32.183",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Pannon MMS",
                    "-mcc": "216",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-mmsc": "http://mmsc.pgsm.hu/",
                    "-mmsproxy": "193.225.154.22",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Pannon",
                    "-mcc": "216",
                    "-mnc": "01",
                    "-apn": "net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telenor Net",
                    "-mcc": "216",
                    "-mnc": "01",
                    "-apn": "net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "T-Mobile NET GPRS",
                    "-mcc": "216",
                    "-mnc": "30",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "T-Mobile HU MMS",
                    "-mcc": "216",
                    "-mnc": "30",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.t-mobile.hu/servlets/mms",
                    "-mmsproxy": "212.51.126.10",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile HU",
                    "-mcc": "216",
                    "-mnc": "30",
                    "-apn": "wnw",
                    "-mmsc": "http://mms.t-mobile.hu/servlets/mms",
                    "-mmsproxy": "212.51.126.10",
                    "-mmsport": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone HU",
                    "-mcc": "216",
                    "-mnc": "70",
                    "-apn": "internet.vodafone.net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone HU MMS",
                    "-mcc": "216",
                    "-mnc": "70",
                    "-apn": "mms.vodafone.net",
                    "-mmsc": "http://mms.vodafone.hu/servlets/mms",
                    "-mmsproxy": "80.244.97.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "ERONET START",
                    "-mcc": "218",
                    "-mnc": "03",
                    "-apn": "gprs.eronet.ba",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "ERONET MI 50",
                    "-mcc": "218",
                    "-mnc": "03",
                    "-apn": "web.eronet.ba",
                    "-type": "supl"
                },
                {
                    "-carrier": "ERONET MI 200",
                    "-mcc": "218",
                    "-mnc": "03",
                    "-apn": "web.eronet.ba",
                    "-type": "supl"
                },
                {
                    "-carrier": "ERONET 512",
                    "-mcc": "218",
                    "-mnc": "03",
                    "-apn": "data1.eronet.ba",
                    "-type": "supl"
                },
                {
                    "-carrier": "ERONET 1GB",
                    "-mcc": "218",
                    "-mnc": "03",
                    "-apn": "data4.eronet.ba",
                    "-type": "supl"
                },
                {
                    "-carrier": "ERONET 4GB",
                    "-mcc": "218",
                    "-mnc": "03",
                    "-apn": "data2.eronet.ba",
                    "-type": "supl"
                },
                {
                    "-carrier": "ERONET FLAT",
                    "-mcc": "218",
                    "-mnc": "03",
                    "-apn": "data3.eronet.ba",
                    "-type": "supl"
                },
                {
                    "-carrier": "ERONET MMS",
                    "-mcc": "218",
                    "-mnc": "03",
                    "-apn": "mms.eronet.ba",
                    "-mmsc": "http://mms.gprs.eronet.ba/mms/wapenc",
                    "-mmsproxy": "010.012.003.011",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BH Mobile",
                    "-mcc": "218",
                    "-mnc": "90",
                    "-apn": "active.bhmobile.ba",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BH Mobile MMS",
                    "-mcc": "218",
                    "-mnc": "90",
                    "-apn": "mms.bhmobile.ba",
                    "-mmsc": "http://mms.bhmobile.ba/cmmsc/post",
                    "-mmsproxy": "195.222.056.041",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile HR MMS",
                    "-mcc": "219",
                    "-mnc": "01",
                    "-apn": "mms.htgprs",
                    "-mmsc": "http://mms.t-mobile.hr/servlets/mms",
                    "-mmsproxy": "10.12.0.4",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile HR",
                    "-mcc": "219",
                    "-mnc": "01",
                    "-apn": "internet.ht.hr",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tele2 HR",
                    "-mcc": "219",
                    "-mnc": "02",
                    "-apn": "wap.tele2.hr",
                    "-mmsc": "http://mmsc.tele2.hr",
                    "-mmsproxy": "193.12.40.66",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "VIPnet",
                    "-mcc": "219",
                    "-mnc": "10",
                    "-apn": "gprs0.vipnet.hr",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VIPnet",
                    "-mcc": "219",
                    "-mnc": "10",
                    "-apn": "data.vip.hr",
                    "-user": "38591",
                    "-password": "38591",
                    "-server": "219.91.99.91",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VIPnet MMS",
                    "-mcc": "219",
                    "-mnc": "10",
                    "-apn": "mms.vipnet.hr",
                    "-mmsc": "http://mms.vipnet.hr/servlets/mms",
                    "-mmsproxy": "212.91.99.91",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telenor RS",
                    "-mcc": "220",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-user": "telenor",
                    "-password": "gprs",
                    "-proxy": "217.65.192.33",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telenor RS MMS",
                    "-mcc": "220",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-mmsc": "http://mms.telenor.rs/servlets/mms",
                    "-mmsproxy": "217.65.192.33",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "MTS RS",
                    "-mcc": "220",
                    "-mnc": "03",
                    "-apn": "gprswap",
                    "-user": "mts",
                    "-password": "064",
                    "-proxy": "172.017.088.198",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTS RS MMS",
                    "-mcc": "220",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-user": "mts",
                    "-password": "064",
                    "-mmsc": "http://mms.mts064.telekom.rs/mms/wapenc",
                    "-mmsproxy": "172.017.085.131",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "VIP MMS",
                    "-mcc": "220",
                    "-mnc": "05",
                    "-apn": "vipmobile.mms",
                    "-user": "vipmobile",
                    "-password": "vipmobile",
                    "-mmsc": "http://mmsc.vipmobile.rs/",
                    "-mmsproxy": "212.15.182.82",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "VIP",
                    "-mcc": "220",
                    "-mnc": "05",
                    "-apn": "vipmobile",
                    "-user": "vipmobile",
                    "-password": "vipmobile",
                    "-proxy": "212.15.182.82",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TIM IT",
                    "-mcc": "222",
                    "-mnc": "01",
                    "-apn": "ibox.tim.it",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TIM IT WAP",
                    "-mcc": "222",
                    "-mnc": "01",
                    "-apn": "wap.tim.it",
                    "-proxy": "213.26.205.1",
                    "-port": "80",
                    "-user": "WAPTIM",
                    "-password": "WAPTIM",
                    "-server": "http://wap.i.tim.it",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "NOVERCA MMS",
                    "-mcc": "222",
                    "-mnc": "01",
                    "-apn": "mms.noverca.it",
                    "-mmsc": "http://mms.noverca.it/",
                    "-mmsproxy": "213.230.130.89",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "TIM MMS",
                    "-mcc": "222",
                    "-mnc": "01",
                    "-apn": "mms.tim.it",
                    "-mmsc": "http://mms.tim.it/servlets/mms",
                    "-mmsproxy": "213.230.130.89",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tiscali INTERNET",
                    "-mcc": "222",
                    "-mnc": "01",
                    "-apn": "tiscalimobileinternet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tiscali MMS",
                    "-mcc": "222",
                    "-mnc": "01",
                    "-apn": "tiscalimobilemms",
                    "-mmsc": "http://mms.tiscali.mobi/servlets/mms",
                    "-mmsproxy": "213.230.130.89",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "iTIM",
                    "-mcc": "222",
                    "-mnc": "01",
                    "-apn": "unico.tim.it",
                    "-proxy": "213.230.130.89",
                    "-port": "80",
                    "-mmsc": "http://mms.tim.it/servlets/mms",
                    "-mmsproxy": "213.230.130.89",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "NOVERCA WEB",
                    "-mcc": "222",
                    "-mnc": "01",
                    "-apn": "web.noverca.it",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IT MMS",
                    "-mcc": "222",
                    "-mnc": "10",
                    "-apn": "mms.vodafone.it",
                    "-mmsc": "http://mms.vodafone.it/servlets/mms",
                    "-mmsproxy": "10.128.224.10",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IT",
                    "-mcc": "222",
                    "-mnc": "10",
                    "-apn": "mobile.vodafone.it",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone WEB",
                    "-mcc": "222",
                    "-mnc": "10",
                    "-apn": "web.omnitel.it",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Poste Mobile",
                    "-mcc": "222",
                    "-mnc": "10",
                    "-apn": "wap.postemobile.it",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Poste Mobile MMS",
                    "-mcc": "222",
                    "-mnc": "10",
                    "-apn": "mms.postemobile.it",
                    "-mmsc": "http://mms.postemobile.it/servlets/mms",
                    "-mmsproxy": "10.128.224.10",
                    "-mmsport": "80",
                    "-authtype": "0",
                    "-type": "mms"
                },
                {
                    "-carrier": "Wind IT WEB",
                    "-mcc": "222",
                    "-mnc": "88",
                    "-apn": "internet.wind",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Wind IT MMS",
                    "-mcc": "222",
                    "-mnc": "88",
                    "-apn": "mms.wind",
                    "-mmsc": "http://mms.wind.it",
                    "-mmsproxy": "212.245.244.011",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Fastweb",
                    "-mcc": "222",
                    "-mnc": "99",
                    "-apn": "apn.fastweb.it",
                    "-mmsc": "http://mms.fastweb.it/mms/wapenc",
                    "-mmsproxy": "10.0.65.9",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "3",
                    "-mcc": "222",
                    "-mnc": "99",
                    "-apn": "tre.it",
                    "-mmsc": "http://10.216.59.240:10021/mmsc",
                    "-mmsproxy": "62.13.171.3",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone Internet",
                    "-mcc": "226",
                    "-mnc": "01",
                    "-apn": "internet.vodafone.ro ",
                    "-user": "internet.vodafone.ro ",
                    "-password": "vodafone",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone RO",
                    "-mcc": "226",
                    "-mnc": "01",
                    "-apn": "internet.vodafone.ro",
                    "-user": "internet.vodafone.ro",
                    "-password": "vodafone",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone RO live! PRE",
                    "-mcc": "226",
                    "-mnc": "01",
                    "-apn": "live.pre.vodafone.com",
                    "-user": "live",
                    "-password": "vodafone",
                    "-proxy": "193.230.161.231",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone RO live!",
                    "-mcc": "226",
                    "-mnc": "01",
                    "-apn": "live.vodafone.com",
                    "-user": "live",
                    "-password": "vodafone",
                    "-proxy": "193.230.161.231",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone RO MMS PRE",
                    "-mcc": "226",
                    "-mnc": "01",
                    "-apn": "mms.pre.vodafone.ro",
                    "-user": "mms",
                    "-password": "vodafone",
                    "-mmsc": "http://multimedia/servlets/mms",
                    "-mmsproxy": "193.230.161.231",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone RO MMS",
                    "-mcc": "226",
                    "-mnc": "01",
                    "-apn": "mms.vodafone.ro",
                    "-user": "mms",
                    "-password": "vodafone",
                    "-mmsc": "http://multimedia/servlets/mms",
                    "-mmsproxy": "193.230.161.231",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Cosmote Broadband RO",
                    "-mcc": "226",
                    "-mnc": "03",
                    "-apn": "broadband",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Cosmote Internet RO",
                    "-mcc": "226",
                    "-mnc": "03",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Cosmote RO MMS",
                    "-mcc": "226",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mmsc1.mms.cosmote.ro:8002",
                    "-mmsproxy": "10.252.1.62",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Cosmote WNW RO",
                    "-mcc": "226",
                    "-mnc": "03",
                    "-apn": "wnw",
                    "-user": "wnw",
                    "-password": "wnw",
                    "-proxy": "10.252.1.62",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Digi.Mobil",
                    "-mcc": "226",
                    "-mnc": "05",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange RO",
                    "-mcc": "226",
                    "-mnc": "10",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "226",
                    "-mnc": "10",
                    "-apn": "mms",
                    "-mmsc": "http://wap.mms.orange.ro:8002",
                    "-mmsproxy": "62.217.247.252",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange WAP",
                    "-mcc": "226",
                    "-mnc": "10",
                    "-apn": "wap",
                    "-proxy": "62.217.247.252",
                    "-port": "8799",
                    "-type": "default"
                },
                {
                    "-carrier": "Orange Internet",
                    "-mcc": "226",
                    "-mnc": "10",
                    "-apn": "net",
                    "-type": "default"
                },
                {
                    "-carrier": "Swisscom MMS",
                    "-mcc": "228",
                    "-mnc": "01",
                    "-apn": "event.swisscom.ch",
                    "-mmsc": "http://mms.natel.ch:8079",
                    "-mmsproxy": "192.168.210.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Swisscom",
                    "-mcc": "228",
                    "-mnc": "01",
                    "-apn": "gprs.swisscom.ch",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Sunrise Internet",
                    "-mcc": "228",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Sunrise MMS",
                    "-mcc": "228",
                    "-mnc": "02",
                    "-apn": "mms.sunrise.ch",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": " http://mmsc.sunrise.ch",
                    "-mmsproxy": "212.35.34.75",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange Internet",
                    "-mcc": "228",
                    "-mnc": "03",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "228",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-mmsc": "http://192.168.151.3:8002",
                    "-mmsproxy": "192.168.151.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange Prepaid CH",
                    "-mcc": "238",
                    "-mnc": "03",
                    "-apn": "click",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "T-Mobile CZ",
                    "-mcc": "230",
                    "-mnc": "01",
                    "-apn": "internet.t-mobile.cz",
                    "-user": "wap",
                    "-password": "wap",
                    "-server": "*",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "010.000.000.010",
                    "-mmsport": "80",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "T-Mobile CZ MMS",
                    "-mcc": "230",
                    "-mnc": "01",
                    "-apn": "mms.t-mobile.cz",
                    "-user": "mms",
                    "-password": "mms",
                    "-server": "*",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "010.000.000.010",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "O2 CZ-Internet",
                    "-mcc": "230",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "O2 CZ-MMS",
                    "-mcc": "230",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-server": "O2 MMS",
                    "-mmsc": "http://mms.o2active.cz:8002",
                    "-mmsproxy": "160.218.160.218",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone CZ",
                    "-mcc": "230",
                    "-mnc": "03",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone CZ MMS",
                    "-mcc": "230",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-server": "mms",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "10.11.10.111",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone CZ Prepaid",
                    "-mcc": "230",
                    "-mnc": "03",
                    "-apn": "ointernet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange SK",
                    "-mcc": "231",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default"
                },
                {
                    "-carrier": "Orange SK MMS",
                    "-mcc": "231",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-user": "wap",
                    "-password": "wap",
                    "-mmsc": "http://imms.orange.sk",
                    "-mmsproxy": "213.151.208.145",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange World",
                    "-mcc": "231",
                    "-mnc": "01",
                    "-apn": "orangewap",
                    "-user": "wap",
                    "-password": "wap",
                    "-proxy": "213.151.208.156",
                    "-port": "8799",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telekom SK",
                    "-mcc": "231",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telekom SK MMS",
                    "-mcc": "231",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "192.168.1.1",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telekom SK",
                    "-mcc": "231",
                    "-mnc": "04",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telekom SK MMS",
                    "-mcc": "231",
                    "-mnc": "04",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "192.168.1.1",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange Internet",
                    "-mcc": "231",
                    "-mnc": "05",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "231",
                    "-mnc": "05",
                    "-apn": "mms",
                    "-user": "wap",
                    "-password": "wap",
                    "-mmsc": "http://imms.orange.sk",
                    "-mmsproxy": "213.151.208.145",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "O2 SK",
                    "-mcc": "231",
                    "-mnc": "06",
                    "-apn": "o2internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "O2 SK MMS",
                    "-mcc": "231",
                    "-mnc": "06",
                    "-apn": "o2mms",
                    "-mmsc": "http://mms.o2world.sk:8002",
                    "-mmsproxy": "10.97.1.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobilkom",
                    "-mcc": "232",
                    "-mnc": "01",
                    "-apn": "a1.net",
                    "-user": "ppp@a1plus.at",
                    "-password": "ppp",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "A1",
                    "-mcc": "232",
                    "-mnc": "01",
                    "-apn": "a1.net",
                    "-user": "ppp@A1plus.at",
                    "-password": "ppp",
                    "-server": "*",
                    "-mmsc": "http://mmsc.A1.net",
                    "-mmsproxy": "194.048.124.071",
                    "-mmsport": "8001",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Mobilkom MMS",
                    "-mcc": "232",
                    "-mnc": "01",
                    "-apn": "free.a1.net",
                    "-user": "ppp@a1plus.at",
                    "-password": "ppp",
                    "-mmsc": "http://mmsc.a1.net",
                    "-mmsproxy": "194.48.124.71",
                    "-mmsport": "8001",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile AT",
                    "-mcc": "232",
                    "-mnc": "03",
                    "-apn": "gprsinternet",
                    "-user": "t-mobile",
                    "-password": "tm",
                    "-server": "*",
                    "-mmsc": "http://mmsc.t-mobile.at/servlets/mms",
                    "-mmsproxy": "010.012.000.020",
                    "-mmsport": "80",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "T-Mobile AT-MMS",
                    "-mcc": "232",
                    "-mnc": "03",
                    "-apn": "gprsmms",
                    "-user": "t-mobile",
                    "-password": "tm",
                    "-server": "*",
                    "-mmsc": "http://mmsc.t-mobile.at/servlets/mms",
                    "-mmsproxy": "010.012.000.020",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "3 AT",
                    "-mcc": "232",
                    "-mnc": "05",
                    "-apn": "drei.at",
                    "-server": "http://mobile.drei.at",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "213.094.078.133",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "tele.ring MMS",
                    "-mcc": "232",
                    "-mnc": "07",
                    "-apn": "mms",
                    "-user": "wap@telering.at",
                    "-password": "wap",
                    "-mmsc": "http://relay.mms.telering.at",
                    "-mmsproxy": "212.95.31.50",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "tele.ring WEB",
                    "-mcc": "232",
                    "-mnc": "07",
                    "-apn": "web",
                    "-user": "web@telering.at",
                    "-password": "web",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "3 AT",
                    "-mcc": "232",
                    "-mnc": "10",
                    "-apn": "drei.at",
                    "-server": "http://mobile.drei.at",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "213.094.078.133",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Bob",
                    "-mcc": "232",
                    "-mnc": "11",
                    "-apn": "bob.at",
                    "-user": "data@bob.at",
                    "-password": "ppp",
                    "-server": "http://start.bob.at/",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Bob MMS",
                    "-mcc": "232",
                    "-mnc": "11",
                    "-apn": "mms.bob.at",
                    "-user": "data@bob.at",
                    "-password": "web",
                    "-server": "http://start.bob.at/",
                    "-proxy": "194.48.124.7",
                    "-port": "8001",
                    "-mmsc": "http://mmsc.bob.at",
                    "-mmsproxy": "194.48.124.7",
                    "-mmsport": "8001",
                    "-type": "mms"
                },
                {
                    "-carrier": "Yesss",
                    "-mcc": "232",
                    "-mnc": "12",
                    "-apn": "web.yesss.at",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "UBIQUISYS",
                    "-mcc": "234",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Tesco UK",
                    "-mcc": "234",
                    "-mnc": "01",
                    "-apn": "prepay.tesco-mobile.com",
                    "-user": "tescowap",
                    "-password": "password",
                    "-server": "http://wap.tesco-mobile.com/",
                    "-proxy": "193.113.200.195",
                    "-port": "9201",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "O2 UK",
                    "-mcc": "234",
                    "-mnc": "10",
                    "-apn": "mobile.o2.co.uk",
                    "-user": "o2web",
                    "-password": "password",
                    "-mmsc": "http://mmsc.mms.o2.co.uk:8002",
                    "-mmsproxy": "193.113.200.195",
                    "-mmsport": "8080",
                    "-authenticationtype": "PAP",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Giffgaff",
                    "-mcc": "234",
                    "-mnc": "10",
                    "-apn": "giffgaff.com",
                    "-user": "giffgaff",
                    "-password": "password",
                    "-mmsc": "http://mmsc.mediamessaging.co.uk:8002",
                    "-mmsproxy": "82.132.254.1",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Tesco",
                    "-mcc": "234",
                    "-mnc": "10",
                    "-apn": "prepay.tesco-mobile.com",
                    "-user": "tescowap",
                    "-password": "tescowap",
                    "-proxy": "193.113.200.195",
                    "-port": "8080",
                    "-mmsc": "http://mmsc.mms.02.co.uk:8002",
                    "-mmsproxy": "193.113.200.195",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone UK Contract Internet",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "Internet",
                    "-user": "web",
                    "-password": "web",
                    "-server": "*",
                    "-mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                    "-mmsproxy": "212.183.137.012",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone Post-pay ISP",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "internet",
                    "-user": "web",
                    "-password": "web",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Talkmobile",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "payg.talkmobile.co.uk",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Talkmobile MMS",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "payg.talkmobile.co.uk",
                    "-user": "wap",
                    "-password": "password",
                    "-mmsc": "http://mms.talkmobile.co.uk/servlets/mms",
                    "-mmsproxy": "212.183.137.12",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone Prepay",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "pp.vodafone.co.uk",
                    "-user": "wap",
                    "-password": "wap",
                    "-mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                    "-mmsproxy": "212.183.137.12",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone UK Contract WAP",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "wap.vodafone.co.uk",
                    "-user": "wap",
                    "-password": "wap",
                    "-server": "*",
                    "-mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                    "-mmsproxy": "212.183.137.012",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Lebara UK",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "uk.lebara.mobi",
                    "-user": "web",
                    "-password": "web",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "LEbara UK MMS",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "uk.lebara.mobi",
                    "-user": "web",
                    "-password": "web",
                    "-server": "*",
                    "-mmsc": "http://mms.lebara.co.uk/servlets/mms",
                    "-mmsproxy": "212.183.137.012",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Talkmobile",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "talkmobile.co.uk",
                    "-user": "wap",
                    "-password": "wap",
                    "-mmsc": "http://mms.talkmobile.co.uk/servlets/mms",
                    "-mmsproxy": "212.183.137.12",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "OVIVO",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "ovivomobile.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "OVIVO MMS",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "gprsconnect.com",
                    "-mmsc": "http://mms.gprsconnect.com/servlets/mms",
                    "-mmsproxy": "212.183.137.12",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TalkTalk",
                    "-mcc": "234",
                    "-mnc": "15",
                    "-apn": "mobile.talktalk.co.uk",
                    "-mmsc": "http://mms.talktalk.co.uk/servlets/mms",
                    "-port": "8799",
                    "-mmsproxy": "212.183.137.12",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "3 UK",
                    "-mcc": "234",
                    "-mnc": "20",
                    "-apn": "three.co.uk",
                    "-mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                    "-mmsproxy": "mms.three.co.uk",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "EE Internet",
                    "-mcc": "234",
                    "-mnc": "30",
                    "-apn": "everywhere",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-authtype": "1",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "EE MMS",
                    "-mcc": "234",
                    "-mnc": "30",
                    "-apn": "eezone",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "149.254.201.135",
                    "-mmsport": "8080",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "Virgin UK",
                    "-mcc": "234",
                    "-mnc": "31",
                    "-apn": "goto.virginmobile.uk",
                    "-user": "user",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Virgin UK MMS",
                    "-mcc": "234",
                    "-mnc": "31",
                    "-apn": "goto.virginmobile.uk",
                    "-mmsc": "http://mms.virginmobile.co.uk:8002",
                    "-mmsproxy": "193.30.166.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "EE Internet",
                    "-mcc": "234",
                    "-mnc": "31",
                    "-apn": "everywhere",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-authtype": "1",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "EE MMS",
                    "-mcc": "234",
                    "-mnc": "31",
                    "-apn": "eezone",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "149.254.201.135",
                    "-mmsport": "8080",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "EE Internet",
                    "-mcc": "234",
                    "-mnc": "32",
                    "-apn": "everywhere",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-authtype": "1",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "Virgin UK",
                    "-mcc": "234",
                    "-mnc": "32",
                    "-apn": "goto.virginmobile.uk",
                    "-user": "user",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Virgin UK MMS",
                    "-mcc": "234",
                    "-mnc": "32",
                    "-apn": "goto.virginmobile.uk",
                    "-mmsc": "http://mms.virginmobile.co.uk:8002",
                    "-mmsproxy": "193.30.166.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "EE MMS",
                    "-mcc": "234",
                    "-mnc": "32",
                    "-apn": "eezone",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "149.254.201.135",
                    "-mmsport": "8080",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "EE Internet",
                    "-mcc": "234",
                    "-mnc": "33",
                    "-apn": "everywhere",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-authtype": "1",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "EE MMS",
                    "-mcc": "234",
                    "-mnc": "33",
                    "-apn": "eezone",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "149.254.201.135",
                    "-mmsport": "8080",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "EE Internet",
                    "-mcc": "234",
                    "-mnc": "34",
                    "-apn": "everywhere",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-authtype": "1",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "EE MMS",
                    "-mcc": "234",
                    "-mnc": "34",
                    "-apn": "eezone",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "149.254.201.135",
                    "-mmsport": "8080",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "Jersey MMS",
                    "-mcc": "234",
                    "-mnc": "50",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.surfmail.com/mmsc",
                    "-mmsproxy": "212.9.19.199",
                    "-mmsport": "3130",
                    "-type": "mms"
                },
                {
                    "-carrier": "Jersey",
                    "-mcc": "234",
                    "-mnc": "50",
                    "-apn": "pepper",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Sure Mobile MMS",
                    "-mcc": "234",
                    "-mnc": "55",
                    "-apn": "MMS",
                    "-mmsc": "http://mmsc.gprs.cw.com/",
                    "-mmsproxy": "10.0.3.101",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Sure Mobile",
                    "-mcc": "234",
                    "-mnc": "55",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Sure Picture Messaging",
                    "-mcc": "234",
                    "-mnc": "55",
                    "-apn": "mms",
                    "-mmsc": "http://mmsc.gprs.cw.com/",
                    "-mmsproxy": "10.0.3.101",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Manx Telecom",
                    "-mcc": "234",
                    "-mnc": "58",
                    "-apn": "3gpronto",
                    "-proxy": "195.010.099.046",
                    "-port": "8080",
                    "-mmsc": "http://mms.manxpronto.net:8002",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "3G HSDPA",
                    "-mcc": "234",
                    "-mnc": "58",
                    "-apn": "3gpronto",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Manx Telecom Contract MMS",
                    "-mcc": "234",
                    "-mnc": "58",
                    "-apn": "mms.manxpronto.net",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.manxpronto.net:8002",
                    "-mmsproxy": "195.10.99.46",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Manx Telecom Prepay MMS",
                    "-mcc": "234",
                    "-mnc": "58",
                    "-apn": "mms.prontogo.net",
                    "-user": "mmsgo",
                    "-password": "mmsgo",
                    "-mmsc": "http://mms.manxpronto.net:8002",
                    "-mmsproxy": "195.10.99.41",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Manx Telecom Contract WEB",
                    "-mcc": "234",
                    "-mnc": "58",
                    "-apn": "web.manxpronto.net",
                    "-user": "gprs",
                    "-password": "gprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "EE Internet",
                    "-mcc": "234",
                    "-mnc": "86",
                    "-apn": "everywhere",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-authtype": "1",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "EE MMS",
                    "-mcc": "234",
                    "-mnc": "86",
                    "-apn": "eezone",
                    "-user": "eesecure",
                    "-password": "secure",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "149.254.201.135",
                    "-mmsport": "8080",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "TDC Internet",
                    "-mcc": "238",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-proxy": "62.135.173.214",
                    "-authtype": "1",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TDC MMS",
                    "-mcc": "238",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-mmsc": "http://mmsc.tdc.dk:8002",
                    "-mmsproxy": "194.182.251.15",
                    "-mmsport": "8080",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "coop mobil MMS",
                    "-mcc": "238",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-mmsc": "http://192.168.241.114:8002",
                    "-mmsproxy": "194.182.251.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telenor Internet",
                    "-mcc": "238",
                    "-mnc": "02",
                    "-apn": "Internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Bibob internet DK",
                    "-mcc": "238",
                    "-mnc": "02",
                    "-apn": "internet.bibob.dk",
                    "-port": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Bibob MMS DK",
                    "-mcc": "238",
                    "-mnc": "02",
                    "-apn": "mms.bibob.dk",
                    "-proxy": "212.88.64.8",
                    "-port": "8080",
                    "-mmsc": "http://mms.telenor.dk",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telenor DK MMS",
                    "-mcc": "238",
                    "-mnc": "02",
                    "-apn": "telenor",
                    "-mmsc": "http://mms.telenor.dk",
                    "-mmsproxy": "212.88.64.8",
                    "-mmsport": "8080",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "3 DK",
                    "-mcc": "238",
                    "-mnc": "06",
                    "-apn": "data.tre.dk",
                    "-mmsc": "http://mms.3.dk",
                    "-mmsproxy": "mmsproxy.3.dk",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "3 Danmark",
                    "-mcc": "238",
                    "-mnc": "06",
                    "-apn": "data.tre.dk",
                    "-mmsc": "http://mms.3.dk/",
                    "-mmsproxy": "172.16.1.25",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Telia DK",
                    "-mcc": "238",
                    "-mnc": "20",
                    "-apn": "www.internet.mtelia.dk",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telia DK MMS",
                    "-mcc": "238",
                    "-mnc": "20",
                    "-apn": "www.mms.mtelia.dk",
                    "-mmsc": "http://mms.telia.dk",
                    "-mmsproxy": "193.209.134.131",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Call me Internet",
                    "-mcc": "238",
                    "-mnc": "20",
                    "-apn": "websp",
                    "-authtype": "2",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Call me MMS",
                    "-mcc": "238",
                    "-mnc": "20",
                    "-apn": "mmssp",
                    "-mmsc": "http://mms.telia.dk",
                    "-mmsproxy": "193.209.134.131",
                    "-mmsport": "8080",
                    "-authtype": "2",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telenor Internet",
                    "-mcc": "238",
                    "-mnc": "77",
                    "-apn": "Internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telenor MMS",
                    "-mcc": "238",
                    "-mnc": "77",
                    "-apn": "telenor",
                    "-mmsc": "http://mms.telenor.dk",
                    "-mmsproxy": "212.88.64.8",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Halebop Internet",
                    "-mcc": "240",
                    "-mnc": "01",
                    "-apn": "halebop.telia.se",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Halebop MMS",
                    "-mcc": "240",
                    "-mnc": "01",
                    "-apn": "mms.telia.se",
                    "-user": "mms",
                    "-password": "telia",
                    "-mmsc": "http://mmss/",
                    "-mmsproxy": "193.209.134.132",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telia SE MMS",
                    "-mcc": "240",
                    "-mnc": "01",
                    "-apn": "mms.telia.se",
                    "-user": "mms",
                    "-password": "telia",
                    "-mmsc": "http://mmss/",
                    "-mmsproxy": "193.209.134.132",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telia SE",
                    "-mcc": "240",
                    "-mnc": "01",
                    "-apn": "online.telia.se",
                    "-user": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "3 SE",
                    "-mcc": "240",
                    "-mnc": "02",
                    "-apn": "data.tre.se",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "3 SE MMS",
                    "-mcc": "240",
                    "-mnc": "02",
                    "-apn": "data.tre.se",
                    "-mmsc": "http://mms.tre.se",
                    "-mmsproxy": "mmsproxy.tre.se",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telenor Mobilsurf",
                    "-mcc": "240",
                    "-mnc": "04",
                    "-apn": "services.telenor.se",
                    "-proxy": "172.30.253.241",
                    "-port": "8799",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telenor MMS",
                    "-mcc": "240",
                    "-mnc": "04",
                    "-apn": "services.telenor.se",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "172.30.253.241",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telenor Mobilsurf",
                    "-mcc": "240",
                    "-mnc": "06",
                    "-apn": "services.telenor.se",
                    "-proxy": "173.30.253.241",
                    "-port": "8799",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telenor MMS",
                    "-mcc": "240",
                    "-mnc": "06",
                    "-apn": "services.telenor.se",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "173.30.253.241",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tele2 4G",
                    "-mcc": "240",
                    "-mnc": "07",
                    "-apn": "4g.tele2.se",
                    "-mmsc": "http://mmsc.tele2.se",
                    "-mmsproxy": "130.244.202.30",
                    "-mmsport": "8080",
                    "-authenticationtype": "CHAP",
                    "-type": "default,mms"
                },
                {
                    "-carrier": "Tele2",
                    "-mcc": "240",
                    "-mnc": "07",
                    "-apn": "mobileinternet.tele2.se",
                    "-mmsc": "http://mmsc.tele2.se",
                    "-mmsproxy": "130.244.202.30",
                    "-mmsport": "8080",
                    "-authenticationtype": "CHAP",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Tele2 SE",
                    "-mcc": "240",
                    "-mnc": "07",
                    "-apn": "internet.tele2.se",
                    "-user": "wap",
                    "-password": "wap",
                    "-mmsc": "http://mmsc.tele2.se",
                    "-mmsproxy": "130.244.202.030",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Tele2 3G",
                    "-mcc": "240",
                    "-mnc": "07",
                    "-apn": "internet.tele2.se",
                    "-mmsc": "http://mmsc.tele2.se",
                    "-mmsproxy": "130.244.202.30",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Telenor SE",
                    "-mcc": "240",
                    "-mnc": "08",
                    "-apn": "internet.telenor.se",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telenor Mobilsurf",
                    "-mcc": "240",
                    "-mnc": "08",
                    "-apn": "services.telenor.se",
                    "-proxy": "172.30.253.241",
                    "-port": "8799",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telenor SE MMS",
                    "-mcc": "240",
                    "-mnc": "08",
                    "-apn": "services.telenor.se",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "172.30.253.241",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Universal",
                    "-mcc": "240",
                    "-mnc": "08",
                    "-apn": "sp-services",
                    "-proxy": "172.030.253.241",
                    "-port": "8799",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "172.30.253.241",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "TelenorMobilsurf",
                    "-mcc": "240",
                    "-mnc": "09",
                    "-apn": "services.telenor.se",
                    "-proxy": "173.30.253.241",
                    "-port": "8799",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telenor MMS",
                    "-mcc": "240",
                    "-mnc": "09",
                    "-apn": "services.telenor.se",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "173.30.253.241",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Spring data",
                    "-mcc": "240",
                    "-mnc": "10",
                    "-apn": "data.springmobil.se",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Spring MMS",
                    "-mcc": "240",
                    "-mnc": "10",
                    "-apn": "mms.springmobil.se",
                    "-mmsc": "http://mms.springmobil.se",
                    "-mmsproxy": "213.88.184.37",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Ventelo Internet",
                    "-mcc": "242",
                    "-mnc": "01",
                    "-apn": "internet.ventelo.no",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Ventelo MMS",
                    "-mcc": "242",
                    "-mnc": "01",
                    "-apn": "mms.ventelo.no",
                    "-user": "ventelo",
                    "-password": "1111",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.10.10.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telenor",
                    "-mcc": "242",
                    "-mnc": "01",
                    "-apn": "telenor",
                    "-proxy": "10.10.10.10",
                    "-port": "8080",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.10.10.11",
                    "-mmsport": "8080",
                    "-authenticationtype": "PAP",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Mobitalk",
                    "-mcc": "242",
                    "-mnc": "01",
                    "-apn": "telenor",
                    "-user": "dj",
                    "-password": "dj",
                    "-proxy": "10.10.10.10",
                    "-port": "8080",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.10.10.11",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Talkmore",
                    "-mcc": "242",
                    "-mnc": "01",
                    "-apn": "telenor",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "NetCom MMS",
                    "-mcc": "242",
                    "-mnc": "02",
                    "-apn": "mms.netcom.no",
                    "-mmsc": "http://mm/",
                    "-mmsproxy": "212.169.66.4",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "NetCom Internett",
                    "-mcc": "242",
                    "-mnc": "02",
                    "-apn": "wap",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Chess MMS",
                    "-mcc": "242",
                    "-mnc": "02",
                    "-apn": "mms.netcom.no",
                    "-user": "chess",
                    "-password": "chess",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "193.209.134.133",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Chess Internet",
                    "-mcc": "242",
                    "-mnc": "02",
                    "-apn": "netcom",
                    "-user": "chess",
                    "-password": "chess",
                    "-proxy": "10.254.254.10",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tele2 NO Internet",
                    "-mcc": "242",
                    "-mnc": "03",
                    "-apn": "internet.tele2.no",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tele2 NO MMS",
                    "-mcc": "242",
                    "-mnc": "03",
                    "-apn": "mms.tele2.no",
                    "-user": "wap",
                    "-password": "wap",
                    "-mmsc": "mmsc.tele2.no",
                    "-mmsproxy": "192.12.40.14:8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tele2 MMS",
                    "-mcc": "242",
                    "-mnc": "04",
                    "-apn": "internet.tele2.no ",
                    "-mmsc": "http://mmsc.tele2.no",
                    "-mmsproxy": "193.012.040.014",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tele2 Internett",
                    "-mcc": "242",
                    "-mnc": "04",
                    "-apn": "internet.tele2.no",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "NwN",
                    "-mcc": "242",
                    "-mnc": "05",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "NwN MMS",
                    "-mcc": "242",
                    "-mnc": "05",
                    "-apn": "mms",
                    "-mmsc": "http://mms.nwn.no",
                    "-mmsproxy": "188.149.250.10",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "DNA Internet",
                    "-mcc": "244",
                    "-mnc": "03",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "DNA MMS",
                    "-mcc": "244",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-user": "dna",
                    "-password": "mms",
                    "-mmsc": "http://mmsc.dnafinland.fi/",
                    "-mmsproxy": "10.1.1.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "DNA Internet",
                    "-mcc": "244",
                    "-mnc": "04",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "DNA MMS",
                    "-mcc": "244",
                    "-mnc": "04",
                    "-apn": "mms",
                    "-user": "dna",
                    "-password": "mms",
                    "-mmsc": "http://mmsc.dnafinland.fi/",
                    "-mmsproxy": "10.1.1.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Elisa FI",
                    "-mcc": "244",
                    "-mnc": "05",
                    "-apn": "Internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Elisa Internet",
                    "-mcc": "244",
                    "-mnc": "05",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Elisa FIMMS",
                    "-mcc": "244",
                    "-mnc": "05",
                    "-apn": "mms",
                    "-mmsc": "http://mms.elisa.fi",
                    "-mmsproxy": "213.161.41.57",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "TDC Internet",
                    "-mcc": "244",
                    "-mnc": "10",
                    "-apn": "internet.song.fi",
                    "-user": "song@internet",
                    "-password": "songnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TDC MMS",
                    "-mcc": "244",
                    "-mnc": "10",
                    "-apn": "mms.song.fi",
                    "-mmsc": "http://mms.song.fi",
                    "-mmsproxy": "213.161.41.58",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "DNA INTERNET",
                    "-mcc": "244",
                    "-mnc": "12",
                    "-apn": "Internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "DNA Internet",
                    "-mcc": "244",
                    "-mnc": "12",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "DNA MMS",
                    "-mcc": "244",
                    "-mnc": "12",
                    "-apn": "mms",
                    "-user": "dna",
                    "-password": "mms",
                    "-mmsc": "http://mmsc.dnafinland.fi",
                    "-mmsproxy": "10.1.1.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "DNA Internet",
                    "-mcc": "244",
                    "-mnc": "13",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "DNA MMS",
                    "-mcc": "244",
                    "-mnc": "13",
                    "-apn": "mms",
                    "-user": "dna",
                    "-password": "mms",
                    "-mmsc": "http://mmsc.dnafinland.fi/",
                    "-mmsproxy": "10.1.1.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Saunalahti",
                    "-mcc": "244",
                    "-mnc": "21",
                    "-apn": "internet.saunalahti",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Saunalahti MMS",
                    "-mcc": "244",
                    "-mnc": "21",
                    "-apn": "mms.saunalahti.fi",
                    "-mmsc": "http://mms.saunalahti.fi:8002",
                    "-mmsproxy": "62.142.4.197",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Sonera",
                    "-mcc": "244",
                    "-mnc": "91",
                    "-apn": "Internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TeliaSonera Internet",
                    "-mcc": "244",
                    "-mnc": "91",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Sonera MMS",
                    "-mcc": "244",
                    "-mnc": "91",
                    "-apn": "wap.sonera.net",
                    "-mmsc": "http://mms.sonera.fi:8002",
                    "-mmsproxy": "195.156.25.33",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Omnitel MMS",
                    "-mcc": "246",
                    "-mnc": "01",
                    "-apn": "gprs.mms.lt",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.omnitel.net:8002/",
                    "-mmsproxy": "194.176.32.149",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Omnitel",
                    "-mcc": "246",
                    "-mnc": "01",
                    "-apn": "gprs.startas.lt",
                    "-user": "omni",
                    "-password": "omni",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Omnitel Internet",
                    "-mcc": "246",
                    "-mnc": "01",
                    "-apn": "omnitel",
                    "-user": "omni",
                    "-password": "omni",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Bite LT Internet",
                    "-mcc": "246",
                    "-mnc": "02",
                    "-apn": "banga",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Bite MMS",
                    "-mcc": "246",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-user": "mms@mms",
                    "-password": "mms",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "192.168.150.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Bite ",
                    "-mcc": "246",
                    "-mnc": "02",
                    "-apn": "wap",
                    "-server": "213.226.131.133",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tele2 Internet LT",
                    "-mcc": "246",
                    "-mnc": "03",
                    "-apn": "internet.tele2.lt",
                    "-proxy": "130.244.196.090",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tele2 LT",
                    "-mcc": "246",
                    "-mnc": "03",
                    "-apn": "internet.vodafone.net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tele2 MMS LT",
                    "-mcc": "246",
                    "-mnc": "03",
                    "-apn": "mms.tele2.lt",
                    "-mmsc": "http://mmsc.tele2.lt/",
                    "-mmsproxy": "193.012.040.029",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tele2 LT MMS",
                    "-mcc": "246",
                    "-mnc": "03",
                    "-apn": "wap.tele2.lt",
                    "-mmsc": "http://mmsc.tele2.lt",
                    "-mmsproxy": "193.12.40.29",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "VZW Test Internet",
                    "-mcc": "246",
                    "-mnc": "81",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun,supl",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Test FOTA",
                    "-mcc": "246",
                    "-mnc": "81",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Test IMS",
                    "-mcc": "246",
                    "-mnc": "81",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Test CBS",
                    "-mcc": "246",
                    "-mnc": "81",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Test Internet",
                    "-mcc": "246",
                    "-mnc": "081",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun,supl",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Test FOTA",
                    "-mcc": "246",
                    "-mnc": "081",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Test IMS",
                    "-mcc": "246",
                    "-mnc": "081",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "VZW Test CBS",
                    "-mcc": "246",
                    "-mnc": "081",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "LMT",
                    "-mcc": "247",
                    "-mnc": "01",
                    "-apn": "internet.lmt.lv",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "LMT MMS",
                    "-mcc": "247",
                    "-mnc": "01",
                    "-apn": "mms.lmt.lv",
                    "-mmsc": "http://mmsc.lmt.lv/mmsc",
                    "-mmsproxy": "212.93.97.201",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tele2 Internet LV",
                    "-mcc": "247",
                    "-mnc": "02",
                    "-apn": "internet.tele2.lv",
                    "-user": "wap",
                    "-password": "wap",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tele2 MMS LV",
                    "-mcc": "247",
                    "-mnc": "02",
                    "-apn": "mms.tele2.lv",
                    "-user": "wap",
                    "-password": "wap",
                    "-mmsc": "http://mmsc.tele2.lv/",
                    "-mmsproxy": "193.012.040.038",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Bite LV Internet",
                    "-mcc": "247",
                    "-mnc": "05",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Bite MMS",
                    "-mcc": "247",
                    "-mnc": "05",
                    "-apn": "mms",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "192.168.150.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "EMT",
                    "-mcc": "248",
                    "-mnc": "01",
                    "-apn": "internet.emt.ee",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "EMT MMS",
                    "-mcc": "248",
                    "-mnc": "01",
                    "-apn": "mms.emt.ee",
                    "-mmsc": "http://mms.emt.ee/servlets/mms",
                    "-mmsproxy": "217.71.32.82",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Elisa EE",
                    "-mcc": "248",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Elisa EE MMS",
                    "-mcc": "248",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-mmsc": "http://194.204.2.10",
                    "-mmsproxy": "194.204.2.6",
                    "-mmsport": "8000",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tele2 EE",
                    "-mcc": "248",
                    "-mnc": "03",
                    "-apn": "internet.tele2.ee",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tele2 EE MMS",
                    "-mcc": "248",
                    "-mnc": "03",
                    "-apn": "mms.tele2.ee",
                    "-mmsc": "http://mmsc.tele2.ee",
                    "-mmsproxy": "193.12.40.6",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "MTS RU",
                    "-mcc": "250",
                    "-mnc": "01",
                    "-apn": "internet.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "ETK",
                    "-mcc": "250",
                    "-mnc": "01",
                    "-apn": "mms.etk.ru",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "010.010.030.060",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "MTS RU MMS",
                    "-mcc": "250",
                    "-mnc": "01",
                    "-apn": "mms.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "192.168.192.192",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Megafon Internet",
                    "-mcc": "250",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Megafon MMS",
                    "-mcc": "250",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mmsc:8002",
                    "-mmsproxy": "10.10.10.10",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "NCC",
                    "-mcc": "250",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-mmsc": "http://10.0.3.50",
                    "-mmsproxy": "10.0.3.20",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "������-�ڧߧ�֧�ߧ֧�",
                    "-mcc": "250",
                    "-mnc": "04",
                    "-apn": "internet.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "������ ���֧ߧ�� MMS",
                    "-mcc": "250",
                    "-mnc": "04",
                    "-apn": "mms.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "192.168.192.192",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "ETK",
                    "-mcc": "250",
                    "-mnc": "05",
                    "-apn": "internet.etk.ru",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "������-�ڧߧ�֧�ߧ֧�",
                    "-mcc": "250",
                    "-mnc": "05",
                    "-apn": "internet.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "������ ���֧ߧ�� MMS",
                    "-mcc": "250",
                    "-mnc": "05",
                    "-apn": "mms.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "192.168.192.192",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "internet",
                    "-mcc": "250",
                    "-mnc": "07",
                    "-apn": "internet.smarts.ru",
                    "-user": "any",
                    "-password": "any",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "mms",
                    "-mcc": "250",
                    "-mnc": "07",
                    "-apn": "mms.smarts.ru",
                    "-user": "wap",
                    "-password": "wap",
                    "-mmsc": "http://172.24.120.135/mms/wapenc",
                    "-mmsproxy": "172.24.128.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "������-�ڧߧ�֧�ߧ֧�",
                    "-mcc": "250",
                    "-mnc": "10",
                    "-apn": "internet.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "������ ���֧ߧ�� MMS",
                    "-mcc": "250",
                    "-mnc": "10",
                    "-apn": "mms.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "192.168.192.192",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Beeline internet",
                    "-mcc": "250",
                    "-mnc": "11",
                    "-apn": "internet.beeline.ru",
                    "-user": "beeline",
                    "-password": "beeline",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Beeline MMS",
                    "-mcc": "250",
                    "-mnc": "11",
                    "-apn": "mms.beeline.ru",
                    "-user": "beeline",
                    "-password": "beeline",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "192.168.094.023",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "GPRS-Internet",
                    "-mcc": "250",
                    "-mnc": "12",
                    "-apn": "inet.bwc.ru",
                    "-user": "bwc",
                    "-password": "bwc",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BWC MMS",
                    "-mcc": "250",
                    "-mnc": "12",
                    "-apn": "mms.bwc.ru",
                    "-user": "bwc",
                    "-password": "bwc",
                    "-mmsc": "http://mmsc/mms",
                    "-mmsproxy": "10.10.17.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "������-�ڧߧ�֧�ߧ֧�",
                    "-mcc": "250",
                    "-mnc": "13",
                    "-apn": "internet.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "������ ���֧ߧ�� MMS",
                    "-mcc": "250",
                    "-mnc": "13",
                    "-apn": "mms.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "192.168.192.192",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "MMS",
                    "-mcc": "250",
                    "-mnc": "16",
                    "-apn": "mms.ntc",
                    "-mmsc": "http://mmsc.vntc.ru/was",
                    "-mmsproxy": "80.243.64.68",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Internet",
                    "-mcc": "250",
                    "-mnc": "17",
                    "-apn": "internet.usi.ru",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS",
                    "-mcc": "250",
                    "-mnc": "17",
                    "-apn": "mms.usi.ru",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "192.168.168.192",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tele2 RU",
                    "-mcc": "250",
                    "-mnc": "20",
                    "-apn": "internet.tele2.ru",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tele2 RU MMS",
                    "-mcc": "250",
                    "-mnc": "20",
                    "-apn": "mms.tele2.ru",
                    "-mmsc": "http://mmsc.tele2.ru",
                    "-mmsproxy": "193.12.40.65",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "������-�ڧߧ�֧�ߧ֧�",
                    "-mcc": "250",
                    "-mnc": "39",
                    "-apn": "internet.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "������ ���֧ߧ�� MMS",
                    "-mcc": "250",
                    "-mnc": "39",
                    "-apn": "mms.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "192.168.192.192",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Beeline internet",
                    "-mcc": "250",
                    "-mnc": "44",
                    "-apn": "internet.beeline.ru",
                    "-user": "beeline",
                    "-password": "beeline",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Beeline MMS",
                    "-mcc": "250",
                    "-mnc": "44",
                    "-apn": "mms.beeline.ru",
                    "-user": "beeline",
                    "-password": "beeline",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "192.168.094.023",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "������-�ڧߧ�֧�ߧ֧�",
                    "-mcc": "250",
                    "-mnc": "92",
                    "-apn": "internet.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "������ ���֧ߧ�� MMS",
                    "-mcc": "250",
                    "-mnc": "92",
                    "-apn": "mms.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "192.168.192.192",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "������-�ڧߧ�֧�ߧ֧�",
                    "-mcc": "250",
                    "-mnc": "93",
                    "-apn": "internet.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "������ ���֧ߧ�� MMS",
                    "-mcc": "250",
                    "-mnc": "93",
                    "-apn": "mms.mts.ru",
                    "-user": "mts",
                    "-password": "mts",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "192.168.192.192",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BeeLine RU",
                    "-mcc": "250",
                    "-mnc": "99",
                    "-apn": "internet.beeline.ru",
                    "-user": "beeline",
                    "-password": "beeline",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BeeLine RU MMS",
                    "-mcc": "250",
                    "-mnc": "99",
                    "-apn": "mms.beeline.ru",
                    "-user": "beeline",
                    "-password": "beeline",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "192.168.094.023",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "MTS UA",
                    "-mcc": "255",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTS UA",
                    "-mcc": "255",
                    "-mnc": "01",
                    "-apn": "www.mts.com.ua",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTS UA",
                    "-mcc": "255",
                    "-mnc": "01",
                    "-apn": "active",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTS UA",
                    "-mcc": "255",
                    "-mnc": "01",
                    "-apn": "hyper.net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "JEANS MMS",
                    "-mcc": "255",
                    "-mnc": "01",
                    "-apn": "mms.jeans.ua",
                    "-mmsc": "http://mmsc:8002",
                    "-mmsproxy": "192.168.10.10",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "MTS UA",
                    "-mcc": "255",
                    "-mnc": "01",
                    "-apn": "mms.umc.ua",
                    "-mmsc": "http://mmsc:8002/",
                    "-mmsproxy": "192.168.010.010",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "MTS-MMS",
                    "-mcc": "255",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-mmsc": "http://mmsc:8002",
                    "-mmsproxy": "192.168.010.010",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "JEANS",
                    "-mcc": "255",
                    "-mnc": "01",
                    "-apn": "www.jeans.ua",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTS UA",
                    "-mcc": "255",
                    "-mnc": "01",
                    "-apn": "www.umc.ua",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Beeline UA",
                    "-mcc": "255",
                    "-mnc": "02",
                    "-apn": "internet.beeeline.ua",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Beeline-internet",
                    "-mcc": "255",
                    "-mnc": "02",
                    "-apn": "internet.beeline.ua",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Beeline UA MMS",
                    "-mcc": "255",
                    "-mnc": "02",
                    "-apn": "mms.beeline.ua",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "10.11.8.18",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Ace_Base MMS",
                    "-mcc": "255",
                    "-mnc": "03",
                    "-apn": "mms.kyivstar.net",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.kyivstar.net",
                    "-mmsproxy": "10.10.10.10",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Ace_Base",
                    "-mcc": "255",
                    "-mnc": "03",
                    "-apn": "www.ab.kyivstar.net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Djuice EDGE",
                    "-mcc": "255",
                    "-mnc": "03",
                    "-apn": "www.djuice.com.ua",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Kyivstar EDGE",
                    "-mcc": "255",
                    "-mnc": "03",
                    "-apn": "www.kyivstar.net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "life",
                    "-mcc": "255",
                    "-mnc": "06",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "life MMS",
                    "-mcc": "255",
                    "-mnc": "06",
                    "-apn": "mms",
                    "-mmsc": "http://mms.life.com.ua/cmms/post",
                    "-mmsproxy": "212.58.162.230",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Utel",
                    "-mcc": "255",
                    "-mnc": "07",
                    "-apn": "3g.utel.ua",
                    "-mmsc": "http://10.212.1.4/mms/wapenc",
                    "-mmsproxy": "10.212.3.148",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Velcom MMS",
                    "-mcc": "257",
                    "-mnc": "01",
                    "-apn": "mms.velcom.by",
                    "-user": "mms",
                    "-password": "mms",
                    "-server": "mms.velcom.by",
                    "-mmsc": "http://mms.velcom.by/servlets/mms",
                    "-mmsproxy": "10.200.15.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Velcom BY // Web Plus",
                    "-mcc": "257",
                    "-mnc": "01",
                    "-apn": "plus.velcom.by",
                    "-user": "plus",
                    "-password": "plus",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Velcom BY // Web 500",
                    "-mcc": "257",
                    "-mnc": "01",
                    "-apn": "vmi.velcom.by",
                    "-user": "vmi",
                    "-password": "vmi",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Velcom Web",
                    "-mcc": "257",
                    "-mnc": "01",
                    "-apn": "web.velcom.by",
                    "-user": "web",
                    "-password": "web",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Velcom BY // Web Basic",
                    "-mcc": "257",
                    "-mnc": "01",
                    "-apn": "web1.velcom.by",
                    "-user": "web1",
                    "-password": "web1",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Velcom BY // Web 25",
                    "-mcc": "257",
                    "-mnc": "01",
                    "-apn": "web2.velcom.by",
                    "-user": "web2",
                    "-password": "web2",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Velcom BY // Web 250",
                    "-mcc": "257",
                    "-mnc": "01",
                    "-apn": "web3.velcom.by",
                    "-user": "web3",
                    "-password": "web3",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTS BY",
                    "-mcc": "257",
                    "-mnc": "02",
                    "-apn": "mts",
                    "-user": "mts",
                    "-password": "mts",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTS BY MMS",
                    "-mcc": "257",
                    "-mnc": "02",
                    "-apn": "mts",
                    "-user": "mts",
                    "-password": "mts",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "192.168.192.168",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Life:) // Internet",
                    "-mcc": "257",
                    "-mnc": "04",
                    "-apn": "internet.life.com.by",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Life:) // MMS",
                    "-mcc": "257",
                    "-mnc": "04",
                    "-apn": "mms.life.com.by",
                    "-mmsc": "http://mms.life.com.by/mmsc/",
                    "-mmsproxy": "10.10.10.20",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "259",
                    "-mnc": "01",
                    "-apn": "mms.orange.md",
                    "-mmsc": "http://mms/mms",
                    "-mmsproxy": "192.168.127.125",
                    "-mmsport": "3128",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange IMO",
                    "-mcc": "259",
                    "-mnc": "01",
                    "-apn": "wap.orange.md",
                    "-proxy": "192.168.127.124",
                    "-mmsport": "3128",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MD MOLDCELL",
                    "-mcc": "259",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MD MOLDCELL",
                    "-mcc": "259",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-mmsproxy": "010.000.010.010",
                    "-mmsport": "9401",
                    "-mmsc": "http://mms.moldcell.md/cmmsc/post",
                    "-type": "mms"
                },
                {
                    "-carrier": "GaduAIR",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "internet.gadu-gadu.pl",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "PlusGSM",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "FM Group Mobile MMS",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "mms.fmgmobile.pl",
                    "-mmsc": "http://mms.fmgmobile.pl:8002/",
                    "-mmsproxy": "212.002.096.016",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "GaduAIR MMS",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "mms.gadu-gadu.pl",
                    "-mmsc": "http://mms.gadu-gadu.pl:8002/",
                    "-mmsproxy": "212.002.096.016",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "mBank mobile MMS",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "mms.mobile.pl",
                    "-user": "true",
                    "-password": "true",
                    "-mmsc": "http://mms.mobile.pl:8080",
                    "-mmsproxy": "212.2.96.16",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Carrefour Mova MMS",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "mms.mova.pl",
                    "-mmsc": "http://mms.mova.pl:8002/",
                    "-mmsproxy": "212.002.096.016",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Plus MMS",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "mms.plusgsm.pl",
                    "-mmsc": "http://mms.plusgsm.pl:8002",
                    "-mmsproxy": "212.2.96.16",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "PlusGSM MMS",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-mmsc": "http://mms.plusgsm.pl:8002",
                    "-mmsproxy": "212.002.096.016",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "FM Group Mobile",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "www.fmgmobie.pl",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "mBank mobile",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "www.mobile.pl",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "mBank mobile MMS",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "mms.mobile.pl",
                    "-mmsproxy": "212.2.96.16",
                    "-mmsport": "8080",
                    "-mmsc": "http://mms.mobile.pl:8002",
                    "-type": "mms"
                },
                {
                    "-carrier": "Carrefour Mova",
                    "-mcc": "260",
                    "-mnc": "01",
                    "-apn": "www.mova.pl",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Era Internet",
                    "-mcc": "260",
                    "-mnc": "02",
                    "-apn": "erainternet",
                    "-user": "erainternet",
                    "-password": "erainternet",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tak-Tak",
                    "-mcc": "260",
                    "-mnc": "02",
                    "-apn": "erainternettt",
                    "-user": "erainternet",
                    "-password": "erainternet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Era MMS",
                    "-mcc": "260",
                    "-mnc": "02",
                    "-apn": "eramms",
                    "-user": "eramms",
                    "-password": "eramms",
                    "-server": "*",
                    "-mmsc": "http://mms.era.pl/servlets/mms",
                    "-mmsproxy": "213.158.194.226",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Heyah",
                    "-mcc": "260",
                    "-mnc": "02",
                    "-apn": "heyah.pl",
                    "-user": "heyah",
                    "-password": "heyah",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Heyah MMS",
                    "-mcc": "260",
                    "-mnc": "02",
                    "-apn": "heyahmms",
                    "-user": "heyah",
                    "-password": "heyah",
                    "-mmsc": "http:/mms.heyah.pl/servlets/mms",
                    "-mmsproxy": "213.158.194.057",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobilking MMS",
                    "-mcc": "260",
                    "-mnc": "02",
                    "-apn": "mmsMOBILKING",
                    "-user": "mobilking",
                    "-password": "mobilking",
                    "-mmsc": "http://mms.mobilking.pl/servlets/mms",
                    "-mmsproxy": "213.158.194.226",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobilking",
                    "-mcc": "260",
                    "-mnc": "02",
                    "-apn": "wapMOBILKING",
                    "-user": "mobilking",
                    "-password": "mobilking",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "ASTER",
                    "-mcc": "260",
                    "-mnc": "03",
                    "-apn": "aster.internet",
                    "-user": "internet",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "ASTER MMS",
                    "-mcc": "260",
                    "-mnc": "03",
                    "-apn": "aster.mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.aster.pl",
                    "-mmsproxy": "192.168.006.138",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange PL",
                    "-mcc": "260",
                    "-mnc": "03",
                    "-apn": "internet",
                    "-user": "internet",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS Orange",
                    "-mcc": "260",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.orange.pl",
                    "-mmsproxy": "192.168.6.104",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "MNI",
                    "-mcc": "260",
                    "-mnc": "03",
                    "-apn": "mni.internet",
                    "-user": "mni.internet",
                    "-password": "mni.internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MNI MMS",
                    "-mcc": "260",
                    "-mnc": "03",
                    "-apn": "mni.mms",
                    "-user": "mni.mms",
                    "-password": "mni.mms",
                    "-mmsc": "http://mms.mni.pl/",
                    "-mmsproxy": "192.168.006.135",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Play",
                    "-mcc": "260",
                    "-mnc": "06",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Play MMS",
                    "-mcc": "260",
                    "-mnc": "06",
                    "-apn": "mms",
                    "-mmsc": "http://10.10.28.164/mms/wapenc",
                    "-mmsproxy": "10.10.25.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Cyfrowy Polsat",
                    "-mcc": "260",
                    "-mnc": "12",
                    "-apn": "internet.cyfrowypolsat.pl",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Cyfrowy Polsat MMS",
                    "-mcc": "260",
                    "-mnc": "12",
                    "-apn": "mms.cyfrowypolsat.pl",
                    "-mmsc": "http://mms.cyfrowypolsat.pl:8002/",
                    "-mmsproxy": "79.171.2.33",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telekom DE-MMS",
                    "-mcc": "262",
                    "-mnc": "01",
                    "-apn": "internet.t-mobile",
                    "-mmsc": "http://mms.t-mobile.de/servlets/mms",
                    "-mmsproxy": "172.028.023.131",
                    "-mmsport": "8008",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telekom DE",
                    "-mcc": "262",
                    "-mnc": "01",
                    "-apn": "internet.telekom",
                    "-user": "tm",
                    "-password": "tm",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone DE-MMS",
                    "-mcc": "262",
                    "-mnc": "02",
                    "-apn": "event.vodafone.de",
                    "-mmsc": "http://139.7.24.1/servlets/mms",
                    "-mmsproxy": "139.7.29.17",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone DE",
                    "-mcc": "262",
                    "-mnc": "02",
                    "-apn": "web.vodafone.de",
                    "-user": "none",
                    "-password": "none",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "1und1",
                    "-mcc": "262",
                    "-mnc": "02",
                    "-apn": "web.vodafone.de",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "otelo web",
                    "-mcc": "262",
                    "-mnc": "02",
                    "-apn": "data.otelo.de",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "blau DE",
                    "-mcc": "262",
                    "-mnc": "03",
                    "-apn": "internet.eplus.de",
                    "-user": "blau",
                    "-password": "blau",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "blau DE MMS",
                    "-mcc": "262",
                    "-mnc": "03",
                    "-apn": "mms.eplus.de",
                    "-user": "mms",
                    "-password": "eplus",
                    "-mmsc": "http://mms/eplus",
                    "-mmsproxy": "212.23.97.153",
                    "-mmsport": "5080",
                    "-type": "mms"
                },
                {
                    "-carrier": "E-Plus Web GPRS",
                    "-mcc": "262",
                    "-mnc": "03",
                    "-apn": "internet.eplus.de",
                    "-user": "eplus",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "E-Plus MMS",
                    "-mcc": "262",
                    "-mnc": "03",
                    "-apn": "mms.eplus.de",
                    "-user": "mms",
                    "-password": "eplus",
                    "-mmsc": "http://mms/eplus/",
                    "-mmsproxy": "212.23.97.153",
                    "-mmsport": "5080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Sipgate",
                    "-mcc": "262",
                    "-mnc": "03",
                    "-apn": "sipgate",
                    "-user": "sipgate",
                    "-password": "sipgate",
                    "-type": "default,supl,mms",
                    "-authtype": "2"
                },
                {
                    "-carrier": "Vodafone DE-MMS",
                    "-mcc": "262",
                    "-mnc": "04",
                    "-apn": "event.vodafone.de",
                    "-mmsc": "http://139.7.24.1/servlets/mms",
                    "-mmsproxy": "139.7.29.17",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone DE",
                    "-mcc": "262",
                    "-mnc": "04",
                    "-apn": "web.vodafone.de",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "T-Mobile Internet",
                    "-mcc": "262",
                    "-mnc": "06",
                    "-apn": "internet.t-mobile",
                    "-user": "t-mobile",
                    "-password": "tm",
                    "-mmsc": "http://mms.t-mobile.de/servlets/mms",
                    "-mmsproxy": "172.28.23.131",
                    "-mmsport": "8008",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "o2",
                    "-mcc": "262",
                    "-mnc": "07",
                    "-apn": "internet",
                    "-mmsc": "http://10.81.0.7:8002",
                    "-mmsproxy": "82.113.100.5",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "O2 DE",
                    "-mcc": "262",
                    "-mnc": "07",
                    "-apn": "surfo2",
                    "-mmsc": "http://10.81.0.7:8002",
                    "-mmsproxy": "82.113.100.5",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "o2 Prepaid",
                    "-mcc": "262",
                    "-mnc": "07",
                    "-apn": "pinternet.interkom.de",
                    "-mmsc": "http://10.81.0.7:8002",
                    "-mmsproxy": "82.113.100.6",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "o2",
                    "-mcc": "262",
                    "-mnc": "08",
                    "-apn": "internet",
                    "-mmsc": "http://10.81.0.7:8002",
                    "-mmsproxy": "82.113.100.5",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone DE-MMS",
                    "-mcc": "262",
                    "-mnc": "09",
                    "-apn": "event.vodafone.de",
                    "-mmsc": "http://139.7.24.1/servlets/mms",
                    "-mmsproxy": "139.7.29.17",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone DE",
                    "-mcc": "262",
                    "-mnc": "09",
                    "-apn": "web.vodafone.de",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "o2",
                    "-mcc": "262",
                    "-mnc": "11",
                    "-apn": "internet",
                    "-mmsc": "http://10.81.0.7:8002",
                    "-mmsproxy": "82.113.100.5",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone PT Internet",
                    "-mcc": "268",
                    "-mnc": "01",
                    "-apn": "net2.vodafone.pt",
                    "-user": "vodafone",
                    "-password": "vodafone",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone PT MMS",
                    "-mcc": "268",
                    "-mnc": "01",
                    "-apn": "vas.vodafone.pt",
                    "-user": "vas",
                    "-password": "vas",
                    "-server": "*",
                    "-mmsc": "http://mms/servlets/mms",
                    "-mmsproxy": "213.30.27.63",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Optimus Internet",
                    "-mcc": "268",
                    "-mnc": "03",
                    "-apn": "umts",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Optimus MMS",
                    "-mcc": "268",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-server": "*",
                    "-mmsc": "http://mmsc:10021/mmsc",
                    "-mmsproxy": "62.169.66.5",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Lycamobile PT",
                    "-mcc": "268",
                    "-mnc": "04",
                    "-apn": "data.lycamobile.pt",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TMN Internet",
                    "-mcc": "268",
                    "-mnc": "06",
                    "-apn": "internet",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TMN MMS",
                    "-mcc": "268",
                    "-mnc": "06",
                    "-apn": "mmsc.tmn.pt",
                    "-user": "tmn",
                    "-password": "tmnnet",
                    "-server": "*",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "10.111.2.16",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Luxgsm Internet",
                    "-mcc": "270",
                    "-mnc": "01",
                    "-apn": "web.pt.lu",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Tango",
                    "-mcc": "270",
                    "-mnc": "77",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tango MMS",
                    "-mcc": "270",
                    "-mnc": "77",
                    "-apn": "mms",
                    "-user": "tango",
                    "-password": "tango",
                    "-mmsc": "http://mms.tango.lu",
                    "-mmsproxy": "212.66.75.3",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange LU",
                    "-mcc": "270",
                    "-mnc": "99",
                    "-apn": "orange.lu",
                    "-mmsc": "http://mms.orange.lu",
                    "-mmsproxy": "212.088.139.44",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone IE-ISP",
                    "-mcc": "272",
                    "-mnc": "01",
                    "-apn": "isp.vodafone.ie",
                    "-user": "vodafone",
                    "-password": "vodafone",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IE",
                    "-mcc": "272",
                    "-mnc": "01",
                    "-apn": "live.vodafone.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IE-MMS",
                    "-mcc": "272",
                    "-mnc": "01",
                    "-apn": "mms.vodafone.net",
                    "-mmsc": "http://www.vodafone.ie/mms",
                    "-mmsproxy": "10.24.59.200",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "O2 Ireland",
                    "-mcc": "272",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-mmsc": "http://mmsc.mms.o2.ie:8002",
                    "-mmsproxy": "62.40.32.40",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "O2 IE",
                    "-mcc": "272",
                    "-mnc": "02",
                    "-apn": "wap.dol.ie",
                    "-user": "user",
                    "-password": "user",
                    "-server": "www.o2.ie",
                    "-proxy": "62.40.32.40",
                    "-port": "8080",
                    "-mmsc": "http://mmsc.mms.o2.ie:8002",
                    "-mmsproxy": "62.40.32.40",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Meteor Data",
                    "-mcc": "272",
                    "-mnc": "03",
                    "-apn": "data.mymeteor.ie",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Meteor MMS",
                    "-mcc": "272",
                    "-mnc": "03",
                    "-apn": "mms.mymeteor.ie",
                    "-user": "my",
                    "-password": "wap",
                    "-proxy": "010.085.085.085",
                    "-port": "8799",
                    "-mmsc": "http://mms.mymeteor.ie",
                    "-mmsproxy": "010.085.085.085",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Eircom/Meteor",
                    "-mcc": "272",
                    "-mnc": "03",
                    "-apn": "wap.mymeteor.ie",
                    "-user": "my",
                    "-password": "meteor",
                    "-server": "http://wap.mymeteor.ie",
                    "-proxy": "10.85.85.85",
                    "-port": "8799",
                    "-mmsc": "mms.mymeteor.ie",
                    "-mmsproxy": "10.85.85.85",
                    "-mmsport": "8799",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Eircom/Meteor MMS",
                    "-mcc": "272",
                    "-mnc": "03",
                    "-apn": "wap.mymeteor.ie",
                    "-user": "my",
                    "-password": "meteor",
                    "-server": "http://wap.mymeteor.ie",
                    "-proxy": "10.85.85.85",
                    "-port": "8799",
                    "-mmsc": "http://mms.mymeteor.ie",
                    "-mmsproxy": "10.85.85.85",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "3 IE MMS",
                    "-mcc": "272",
                    "-mnc": "05",
                    "-apn": "3ireland.ie",
                    "-server": "3ireland.ie",
                    "-mmsc": "http://mms.um.3ireland.ie:10021/mmsc",
                    "-mmsproxy": "mms.3ireland.ie",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "3 Ireland",
                    "-mcc": "272",
                    "-mnc": "05",
                    "-apn": "3ireland.ie",
                    "-mmsc": "http://mms.um.3ireland.ie:10021/mmsc",
                    "-mmsproxy": "mms.3ireland.ie",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "TMI Internet APN",
                    "-mcc": "272",
                    "-mnc": "11",
                    "-apn": "tescomobile.liffeytelecom.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TMI MMS APN",
                    "-mcc": "272",
                    "-mnc": "11",
                    "-apn": "tescomobile.liffeytelecom.com",
                    "-mmsc": "http://mmc1/servlets/mms",
                    "-mmsproxy": "10.1.11.19",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Siminn",
                    "-mcc": "274",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Siminn MMS",
                    "-mcc": "274",
                    "-mnc": "01",
                    "-apn": "mms.simi.is",
                    "-mmsc": "http://mms.simi.is/servlets/mms",
                    "-mmsproxy": "213.167.138.200",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone Internet",
                    "-mcc": "274",
                    "-mnc": "02",
                    "-apn": "gprs.is",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone MMS",
                    "-mcc": "274",
                    "-mnc": "02",
                    "-apn": "mms.gprs.is",
                    "-mmsc": "http://mmsc.vodafone.is",
                    "-mmsproxy": "10.22.0.10",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "MMS Nova",
                    "-mcc": "274",
                    "-mnc": "11",
                    "-apn": "mms.nova.is",
                    "-mmsc": "http://mmsc.nova.is",
                    "-mmsproxy": "10.10.2.60",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Net Nova",
                    "-mcc": "274",
                    "-mnc": "11",
                    "-apn": "net.nova.is",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tal",
                    "-mcc": "274",
                    "-mnc": "12",
                    "-apn": "internet.tal.is",
                    "-mmsc": "http://mms.tal.is/servlets/mms",
                    "-mmsproxy": "213.167.138.210",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone AL",
                    "-mcc": "276",
                    "-mnc": "02",
                    "-apn": "Twa",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone AL MMS",
                    "-mcc": "276",
                    "-mnc": "02",
                    "-apn": "vfalmms",
                    "-mmsc": "http://mmsc.vodafone.al",
                    "-mmsproxy": "10.0.9.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Cytamobile MMS",
                    "-mcc": "280",
                    "-mnc": "01",
                    "-apn": "cytamobile",
                    "-user": "user",
                    "-password": "pass",
                    "-mmsc": "http://mmsc.cyta.com.cy",
                    "-mmsproxy": "212.031.096.161",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Cytamobile",
                    "-mcc": "280",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTN CY",
                    "-mcc": "280",
                    "-mnc": "10",
                    "-apn": "internet",
                    "-user": "wap",
                    "-password": "wap",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTN CY MMS",
                    "-mcc": "280",
                    "-mnc": "10",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.mtn.com.cy/mmsc",
                    "-mmsproxy": "172.24.97.1",
                    "-mmsport": "3130",
                    "-type": "mms"
                },
                {
                    "-carrier": "Geocell",
                    "-mcc": "282",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Geocell Mms",
                    "-mcc": "282",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-mmsc": "http://mms.geocell.com.ge/cmmsc/post",
                    "-mmsproxy": "010.011.240.007",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Beeline AM",
                    "-mcc": "283",
                    "-mnc": "01",
                    "-apn": "internet.beeline.am",
                    "-user": "internet",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BeeLine AM MMS",
                    "-mcc": "283",
                    "-mnc": "01",
                    "-apn": "mms.beeline.am",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "10.3.2.205",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "VivaCell",
                    "-mcc": "283",
                    "-mnc": "05",
                    "-apn": "connect.vivacell.am",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VivaCell MMS",
                    "-mcc": "283",
                    "-mnc": "05",
                    "-apn": "mms.vivacell.am",
                    "-mmsc": "http://mms.vivacell.am/mmsc",
                    "-mmsproxy": "83.217.226.72",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange Armenia MMS",
                    "-mcc": "283",
                    "-mnc": "10",
                    "-apn": "mms",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "192.168.220.251",
                    "-mmsport": "3128",
                    "-type": "mms",
                    "-authtype": "1"
                },
                {
                    "-carrier": "Orange Armenia Internet",
                    "-mcc": "283",
                    "-mnc": "10",
                    "-apn": "Internet",
                    "-type": "default",
                    "-authtype": "1"
                },
                {
                    "-carrier": "M-Tel Internet",
                    "-mcc": "284",
                    "-mnc": "01",
                    "-apn": "inet-gprs.mtel.bg",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "M-Tel MMS",
                    "-mcc": "284",
                    "-mnc": "01",
                    "-apn": "mms-gprs.mtel.bg",
                    "-user": "mtel",
                    "-password": "mtel",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.150.0.33",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "VIVACOM Internet",
                    "-mcc": "284",
                    "-mnc": "03",
                    "-apn": "internet.vivacom.bg",
                    "-user": "VIVACOM",
                    "-password": "VIVACOM",
                    "-authtype": "0",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VIVACOM MMS",
                    "-mcc": "284",
                    "-mnc": "03",
                    "-apn": "mms.vivacom.bg",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mmsc.vivacom.bg",
                    "-mmsproxy": "192.168.123.123",
                    "-mmsport": "8080",
                    "-authtype": "0",
                    "-type": "mms"
                },
                {
                    "-carrier": "GLOBUL Internet",
                    "-mcc": "284",
                    "-mnc": "05",
                    "-apn": "globul",
                    "-user": "globul",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "GLOBUL MMS",
                    "-mcc": "284",
                    "-mnc": "05",
                    "-apn": "mms.globul.bg",
                    "-user": "mms",
                    "-mmsc": "http://mmsc1.mms.globul.bg:8002",
                    "-mmsproxy": "192.168.87.11",
                    "-mmsport": "8004",
                    "-type": "mms"
                },
                {
                    "-carrier": "Turkcell",
                    "-mcc": "286",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Turkcell MMS",
                    "-mcc": "286",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.turkcell.com.tr/servlets/mms",
                    "-mmsproxy": "212.252.169.217",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone TR",
                    "-mcc": "286",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-user": "vodafone",
                    "-password": "vodafone",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone TR MMS",
                    "-mcc": "286",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-user": "vodafone",
                    "-password": "vodafone",
                    "-mmsc": "http://217.31.233.18:6001/MM1Servlet",
                    "-mmsproxy": "217.31.233.18",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "AVEA",
                    "-mcc": "286",
                    "-mnc": "03",
                    "-apn": "internet",
                    "-user": "wap",
                    "-password": "wap",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "AVEA MMS",
                    "-mcc": "286",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.avea.com.tr/servlets/mms",
                    "-mmsproxy": "213.161.151.201",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tele",
                    "-mcc": "290",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tele MMS",
                    "-mcc": "290",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-mmsc": "http://mms.tele.gl/mms/wapenc",
                    "-mmsproxy": "10.112.222.37",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Si.mobil Internet",
                    "-mcc": "293",
                    "-mnc": "40",
                    "-apn": "internet.simobil.si",
                    "-user": "simobil",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Si.mobil MMS",
                    "-mcc": "293",
                    "-mnc": "40",
                    "-apn": "mms.simobil.si",
                    "-user": "simobil",
                    "-password": "internet",
                    "-mmsc": "http://mmc",
                    "-mmsproxy": "80.95.224.46",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobitel Internet",
                    "-mcc": "293",
                    "-mnc": "41",
                    "-apn": "internet",
                    "-user": "mobitel",
                    "-password": "internet",
                    "-proxy": "213.229.249.40",
                    "-port": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Mobitel MMS",
                    "-mcc": "293",
                    "-mnc": "41",
                    "-apn": "internet",
                    "-user": "mobitel",
                    "-password": "internet",
                    "-mmsc": "http://mms.mobitel.si/servlets/mms",
                    "-mmsproxy": "213.229.249.40",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-2 Internet",
                    "-mcc": "293",
                    "-mnc": "64",
                    "-apn": "internet.t-2.net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "T-2 Mms",
                    "-mcc": "293",
                    "-mnc": "64",
                    "-apn": "mms.t-2.net",
                    "-mmsc": "http://www.mms.t-2.net:8002",
                    "-mmsproxy": "172.20.18.137",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tusmobil Internet",
                    "-mcc": "293",
                    "-mnc": "70",
                    "-apn": "internet.tusmobil.si",
                    "-user": "tusmobil",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tusmobil MMS",
                    "-mcc": "293",
                    "-mnc": "70",
                    "-apn": "mms.tusmobil.si",
                    "-user": "tusmobil",
                    "-password": "mms",
                    "-mmsc": "http://mms.tusmobil.si:8002",
                    "-mmsproxy": "091.185.221.085",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile MK",
                    "-mcc": "294",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-user": "internet",
                    "-password": "t-mobile",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "T-Mobile MK MMS",
                    "-mcc": "294",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.t-mobile.com.mk",
                    "-mmsproxy": "62.162.155.227",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "ProMonte",
                    "-mcc": "297",
                    "-mnc": "01",
                    "-apn": "gprs.promonte.com",
                    "-user": "gprs",
                    "-password": "gprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "ProMonte MMS",
                    "-mcc": "297",
                    "-mnc": "01",
                    "-apn": "mms.promonte.com",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": " http://mm.vor.promonte.com",
                    "-mmsproxy": "192.168.246.005",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile CG MMS",
                    "-mcc": "297",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-user": "38267",
                    "-password": "38267",
                    "-mmsc": "http://192.168.180.100/servlets/mms",
                    "-mmsproxy": "10.0.5.19",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile CG",
                    "-mcc": "297",
                    "-mnc": "02",
                    "-apn": "tmcg-wnw",
                    "-user": "38267",
                    "-password": "38267",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telus SP",
                    "-mcc": "302",
                    "-mnc": "220",
                    "-apn": "sp.telus.com",
                    "-mmsc": "http://aliasredirect.net/proxy/mmsc",
                    "-mmsproxy": "74.49.0.18",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Telus SP Tether",
                    "-mcc": "302",
                    "-mnc": "220",
                    "-apn": "isp.telus.com",
                    "-mmsc": "http://aliasredirect.net/proxy/mmsc",
                    "-mmsproxy": "74.49.0.18",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Koodo SP",
                    "-mcc": "302",
                    "-mnc": "220",
                    "-apn": "sp.koodo.com",
                    "-proxy": "74.49.0.18",
                    "-port": "80",
                    "-mmsc": "http://aliasredirect.net/proxy/koodo/mmsc",
                    "-mmsproxy": "74.49.0.18",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Eastlink Internet",
                    "-mcc": "302",
                    "-mnc": "270",
                    "-apn": "wisp.mobi.eastlink.ca",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Eastlink MMS",
                    "-mcc": "302",
                    "-mnc": "270",
                    "-apn": "mms.mobi.eastlink.ca",
                    "-mmsc": "http://mmss.mobi.eastlink.ca",
                    "-mmsproxy": "10.232.12.49",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobilicity MMS",
                    "-mcc": "302",
                    "-mnc": "320",
                    "-apn": "mms.davewireless.com",
                    "-mmsc": "http://mms.mobilicity.net",
                    "-mmsproxy": "10.100.3.4",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobilicity",
                    "-mcc": "302",
                    "-mnc": "320",
                    "-apn": "wap.davewireless.com",
                    "-user": "dave",
                    "-password": "password",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Fido LTE",
                    "-mcc": "302",
                    "-mnc": "370",
                    "-apn": "ltemobile.apn",
                    "-mmsc": "http://mms.fido.ca",
                    "-mmsproxy": "205.151.11.13",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Fido Default",
                    "-mcc": "302",
                    "-mnc": "370",
                    "-apn": "fido-core-appl1.apn",
                    "-mmsc": "http://mms.fido.ca",
                    "-mmsproxy": "205.151.11.13",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Fido Internet",
                    "-mcc": "302",
                    "-mnc": "370",
                    "-apn": "internet.fido.ca",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Fido Tethering",
                    "-mcc": "302",
                    "-mnc": "370",
                    "-apn": "isp.fido.apn",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Wind CA",
                    "-mcc": "302",
                    "-mnc": "490",
                    "-apn": "internet.windmobile.ca",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Wind CA MMS",
                    "-mcc": "302",
                    "-mnc": "490",
                    "-apn": "mms.windmobile.ca",
                    "-mmsc": "http://mms.windmobile.ca",
                    "-mmsproxy": "74.115.197.70",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Videotron",
                    "-mcc": "302",
                    "-mnc": "500",
                    "-apn": "media.videotron",
                    "-mmsc": "http://media.videotron.com/",
                    "-mmsproxy": "10.208.89.17",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Bell",
                    "-mcc": "302",
                    "-mnc": "610",
                    "-apn": "pda.bell.ca",
                    "-proxy": "web.wireless.bell.ca",
                    "-port": "80",
                    "-mmsc": "http://mms.bell.ca/mms/wapenc",
                    "-mmsproxy": "web.wireless.bell.ca",
                    "-mmsport": "80"
                },
                {
                    "-carrier": "Bell Flex",
                    "-mcc": "302",
                    "-mnc": "610",
                    "-apn": "inet.bell.ca",
                    "-mmsc": "http://mms.bell.ca/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Rogers",
                    "-mcc": "302",
                    "-mnc": "720",
                    "-apn": "rogers-core-appl1.apn",
                    "-mmsc": "http://mms.gprs.rogers.com",
                    "-mmsproxy": "10.128.1.69",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Rogers Tethering",
                    "-mcc": "302",
                    "-mnc": "720",
                    "-apn": "isp.apn",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Rogers WAP",
                    "-mcc": "302",
                    "-mnc": "720",
                    "-apn": "internet.com",
                    "-password": "wap",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Rogers LTE",
                    "-mcc": "302",
                    "-mnc": "720",
                    "-apn": "ltemobile.apn",
                    "-mmsc": "http://mms.gprs.rogers.com",
                    "-mmsproxy": "10.128.1.69",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Sasktel 3G",
                    "-mcc": "302",
                    "-mnc": "780",
                    "-apn": "inet.stm.sk.ca",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Sasktel MMS",
                    "-mcc": "302",
                    "-mnc": "780",
                    "-apn": "proxy.stm.sk.ca",
                    "-port": "80",
                    "-mmsc": "http://mms.sasktel.com",
                    "-mmsproxy": "mig.sasktel.com",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "00",
                    "-apn": "internet",
                    "-type": "default,mms,dun",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "00",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "00",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "00",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "00",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "002",
                    "-apn": "internet",
                    "-type": "default,mms,dun",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "002",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "002",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "002",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "002",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "003",
                    "-apn": "internet",
                    "-type": "default,mms,dun",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "003",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "003",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "003",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "003",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "004",
                    "-apn": "internet",
                    "-type": "default,mms,dun",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "004",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun,supl",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "004",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "004",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "004",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "005",
                    "-apn": "internet",
                    "-type": "default,mms,dun",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "005",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "005",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "005",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "005",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "006",
                    "-apn": "internet",
                    "-type": "default,mms,dun",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "006",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "006",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "006",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "006",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "012",
                    "-apn": "internet",
                    "-type": "default,mms,dun",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "012",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "012",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "012",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "012",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Cricket",
                    "-mcc": "310",
                    "-mnc": "16",
                    "-apn": "wap.mycricket.com",
                    "-user": "@mycricket.com",
                    "-password": "cricket",
                    "-mmsc": "http://mms.mycricket.com/servlets/mms",
                    "-proxy": "wap.mycricket.com",
                    "-port": "8080",
                    "-authtype": "2",
                    "-type": "*"
                },
                {
                    "-carrier": "Cellular South",
                    "-mcc": "310",
                    "-mnc": "023",
                    "-apn": "internet",
                    "-mmsc": "http://pix.cellularsouth.com/servlets/mms",
                    "-authtype": "3",
                    "-type": "mms"
                },
                {
                    "-carrier": "metropcs",
                    "-mcc": "310",
                    "-mnc": "027",
                    "-apn": "wap.metropcs.net",
                    "-user": "MDN@mymetropcs.com",
                    "-password": "metropcs",
                    "-server": "http://mms.metropcs.net/servlets/mmsc",
                    "-mmsc": "http://mms.metropcs.net/mmsc",
                    "-mmsport": "3128",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "MetroPCS LTE",
                    "-mcc": "310",
                    "-mnc": "260",
                    "-extraid": "6D",
                    "-apn": "fast.metropcs.com",
                    "-authtype": "0",
                    "-mmsc": "http://metropcs.mmsmvno.com/mms/wapenc",
                    "-type": "default,mms,supl"
                },
                {
                    "-carrier": "myBlue Pix",
                    "-mcc": "310",
                    "-mnc": "030",
                    "-apn": "mmswap.centennialwireless.com",
                    "-mmsc": "http://mms.myblue.com/servlets/mms",
                    "-mmsproxy": "63.99.231.135",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Internet",
                    "-mcc": "310",
                    "-mnc": "030",
                    "-apn": "private.centennialwireless.com",
                    "-user": "privuser",
                    "-password": "priv",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "CorrMMS",
                    "-mcc": "310",
                    "-mnc": "080",
                    "-apn": "corrmms",
                    "-mmsc": "http://mms.iot1.com/corr/mms.php",
                    "-mmsproxy": "66.255.55.23",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Internet",
                    "-mcc": "310",
                    "-mnc": "090",
                    "-apn": "isp",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS",
                    "-mcc": "310",
                    "-mnc": "090",
                    "-apn": "mms",
                    "-mmsc": "http://mms.edgemobile.net/mmsc",
                    "-mmsproxy": "12.108.12.13",
                    "-mmsport": "3128",
                    "-type": "mms"
                },
                {
                    "-carrier": "Edge MMS Prepay",
                    "-mcc": "310",
                    "-mnc": "090",
                    "-apn": "ppmms",
                    "-mmsc": "http://mms.edgemobile.net/mmsc",
                    "-mmsproxy": "12.108.12.13",
                    "-mmsport": "3128",
                    "-type": "mms"
                },
                {
                    "-carrier": "LTE INTERNET",
                    "-mcc": "310",
                    "-mnc": "090",
                    "-apn": "4g.mycricket.com",
                    "-type": "default,dun,mms",
                    "-authtype": "0",
                    "-mmsc": "http://mms.mycricket.com/servlets/mms",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "14"
                },
                {
                    "-carrier": "LTE ADMIN",
                    "-mcc": "310",
                    "-mnc": "090",
                    "-apn": "Apnota.4g.mycricket.com",
                    "-type": "fota",
                    "-authtype": "0",
                    "-mmsc": "http://mms.mycricket.com/servlets/mms",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "14"
                },
                {
                    "-carrier": "LTE DNSADMIN",
                    "-mcc": "310",
                    "-mnc": "090",
                    "-apn": "apndnsota.4g.mycricket.com",
                    "-type": "fota",
                    "-authtype": "0",
                    "-mmsc": "http://mms.mycricket.com/servlets/mms",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "14"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "99",
                    "-apn": "internet",
                    "-type": "default,mms,dun",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "99",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "99",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "99",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "99",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "PLAT-OTA-MMS",
                    "-mcc": "310",
                    "-mnc": "100",
                    "-apn": "plateaumms",
                    "-password": "mmsc",
                    "-mmsc": "208.254.124.11:8514",
                    "-mmsproxy": "208.254.124.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "PLATWEB",
                    "-mcc": "310",
                    "-mnc": "100",
                    "-apn": "plateauweb",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Sprint",
                    "-mcc": "310",
                    "-mnc": "120",
                    "-apn": "Sprint",
                    "-user": "Sprint",
                    "-server": "*",
                    "-type": "mms",
                    "-password": "*",
                    "-mmsc": "http://mms.sprintpcs.com",
                    "-mmsproxy": "68.28.31.7",
                    "-mmsport": "80",
                    "-authtype": "3"
                },
                {
                    "-carrier": "Sprint LTE ota",
                    "-mcc": "310",
                    "-mnc": "120",
                    "-apn": "otasn",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6",
                    "-bearer": "14"
                },
                {
                    "-carrier": "Sprint EHRPD ota",
                    "-mcc": "310",
                    "-mnc": "120",
                    "-apn": "otasn",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6",
                    "-bearer": "13"
                },
                {
                    "-carrier": "Sprint LTE internet",
                    "-mcc": "310",
                    "-mnc": "120",
                    "-apn": "n.ispsn",
                    "-type": "default,mms,supl,hipri",
                    "-mmsc": "http://mms.sprintpcs.com",
                    "-mmsproxy": "68.28.31.7",
                    "-mmsport": "80",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6",
                    "-bearer": "14"
                },
                {
                    "-carrier": "Sprint EHRPD internet",
                    "-mcc": "310",
                    "-mnc": "120",
                    "-apn": "n.ispsn",
                    "-type": "default,mms,supl,hipri",
                    "-mmsc": "http://mms.sprintpcs.com",
                    "-mmsproxy": "68.28.31.7",
                    "-mmsport": "80",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6",
                    "-bearer": "13"
                },
                {
                    "-carrier": "My Multi Media",
                    "-mcc": "310",
                    "-mnc": "130",
                    "-apn": "mms.c1.ama",
                    "-user": "cell1mms",
                    "-password": "cell1",
                    "-mmsc": "http://mms.iot1.com/amarillo/mms.php",
                    "-type": "mms"
                },
                {
                    "-carrier": "Cricket AIO",
                    "-mcc": "310",
                    "-mnc": "150",
                    "-apn": "ndo",
                    "-mmsc": "http://mmsc.aiowireless.net",
                    "-mmsproxy": "proxy.aiowireless.net",
                    "-mmsport": "80",
                    "-type": "default,mms,fota,supl"
                },
                {
                    "-carrier": "ATT Phone",
                    "-mcc": "310",
                    "-mnc": "150",
                    "-apn": "phone",
                    "-mmsc": "http://mmsc.mobile.att.net",
                    "-mmsproxy": "proxy.mobile.att.net",
                    "-mmsport": "80",
                    "-type": "default,mms,supl",
                    "-protocol": "IPV4"
                },
                {
                    "-carrier": "T-Mobile US 160",
                    "-mcc": "310",
                    "-mnc": "160",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "DataConnect",
                    "-mcc": "310",
                    "-mnc": "170",
                    "-apn": "isp.cingular",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Cingular MMS",
                    "-mcc": "310",
                    "-mnc": "170",
                    "-apn": "wap.cingular",
                    "-user": "WAP@CINGULARGPRS.COM",
                    "-password": "CINGULAR1",
                    "-mmsc": "http://mmsc.cingular.com",
                    "-mmsproxy": "66.209.11.32",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile US 200",
                    "-mcc": "310",
                    "-mnc": "200",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "T-Mobile US 210",
                    "-mcc": "310",
                    "-mnc": "210",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "T-Mobile US 220",
                    "-mcc": "310",
                    "-mnc": "220",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "T-Mobile US 230",
                    "-mcc": "310",
                    "-mnc": "230",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "T-Mobile US 240",
                    "-mcc": "310",
                    "-mnc": "240",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "T-Mobile US 250",
                    "-mcc": "310",
                    "-mnc": "250",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "T-Mobile US",
                    "-mcc": "310",
                    "-mnc": "260",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "T-Mobile US LTE",
                    "-mcc": "310",
                    "-mnc": "260",
                    "-apn": "fast.t-mobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "T-Mobile US LTE IPv6",
                    "-mcc": "310",
                    "-mnc": "260",
                    "-apn": "fast.t-mobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms",
                    "-protocol": "IPV6"
                },
                {
                    "-carrier": "Simple",
                    "-mcc": "310",
                    "-mnc": "260",
                    "-apn": "simple",
                    "-mmsc": "http://smpl.mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "StraightTalk T-Mobile",
                    "-mcc": "310",
                    "-mnc": "260",
                    "-apn": "wap.tracfone",
                    "-port": "8080",
                    "-mmsc": "http://mms.tracfone.com",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "T-Mobile US 270",
                    "-mcc": "310",
                    "-mnc": "270",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "T-Mobile US 310",
                    "-mcc": "310",
                    "-mnc": "310",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Cingular 380 ATT",
                    "-mcc": "310",
                    "-mnc": "380",
                    "-apn": "proxy",
                    "-proxy": "wireless.cingular.com",
                    "-port": "80",
                    "-mmsc": "http://mmsc.cingular.com/",
                    "-mmsproxy": "wireless.cingular.com",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "AWS MMS",
                    "-mcc": "310",
                    "-mnc": "380",
                    "-apn": "proxy",
                    "-mmsc": "http://mmsc.mymmode.com",
                    "-mmsproxy": "10.250.250.55",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Celloneet MMS",
                    "-mcc": "310",
                    "-mnc": "390",
                    "-apn": "mms.celloneet.com",
                    "-user": "user1@mms.celloneet.com",
                    "-password": "celloneet",
                    "-mmsc": "http://mms.celloneet.com/servlets/mms",
                    "-mmsproxy": "63.99.231.135",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "ATT",
                    "-mcc": "310",
                    "-mnc": "410",
                    "-apn": "wap.cingular",
                    "-user": "WAP@CINGULARGPRS.COM",
                    "-mmsc": "http://mmsc.cingular.com",
                    "-mmsproxy": "wireless.cingular.com",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "ATT Phone",
                    "-mcc": "310",
                    "-mnc": "410",
                    "-apn": "phone",
                    "-mmsc": "http://mmsc.mobile.att.net",
                    "-mmsproxy": "proxy.mobile.att.net",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "ATT LTE",
                    "-mcc": "310",
                    "-mnc": "410",
                    "-apn": "pta",
                    "-mmsc": "http://mmsc.mobile.att.net",
                    "-mmsproxy": "proxy.mobile.att.net",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "ATT Broadband",
                    "-mcc": "310",
                    "-mnc": "410",
                    "-apn": "broadband",
                    "-type": "default"
                },
                {
                    "-carrier": "ATT Activation",
                    "-mcc": "310",
                    "-mnc": "410",
                    "-apn": "lwaactivate",
                    "-protocol": "IP"
                },
                {
                    "-carrier": "StraightTalk ATT",
                    "-mcc": "310",
                    "-mnc": "410",
                    "-apn": "tfdata",
                    "-port": "80",
                    "-mmsc": "http://mms-tf.net",
                    "-mmsproxy": "mms3.tracfone.com",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "StraightTalk ATT.mvno",
                    "-mcc": "310",
                    "-mnc": "410",
                    "-apn": "att.mvno",
                    "-port": "80",
                    "-mmsc": "http://mmsc.cingular.com",
                    "-mmsproxy": "66.209.11.33",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "CBW Internet",
                    "-mcc": "310",
                    "-mnc": "420",
                    "-apn": "wap.gocbw.com",
                    "-user": "cbw",
                    "-server": "216.68.79.199",
                    "-mmsc": "http://mms.gocbw.com:8088/mms",
                    "-mmsproxy": "216.68.79.202",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Viero",
                    "-mcc": "310",
                    "-mnc": "450",
                    "-apn": "internet.vedge.com",
                    "-proxy": "10.168.3.23",
                    "-port": "9401",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Viero MMS",
                    "-mcc": "310",
                    "-mnc": "450",
                    "-apn": "mms",
                    "-mmsc": "http://mms.viero.com",
                    "-mmsproxy": "10.168.3.23",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "DataConnect",
                    "-mcc": "310",
                    "-mnc": "470",
                    "-apn": "isp.cingular",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MediaNet",
                    "-mcc": "310",
                    "-mnc": "470",
                    "-apn": "wap.cingular",
                    "-user": "WAP@CINGULARGPRS.COM",
                    "-password": "CINGULAR1",
                    "-mmsc": "http://mmsc.cingular.com",
                    "-mmsproxy": "66.209.11.32",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "DataConnect",
                    "-mcc": "310",
                    "-mnc": "480",
                    "-apn": "isp.cingular",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MediaNet",
                    "-mcc": "310",
                    "-mnc": "480",
                    "-apn": "wap.cingular",
                    "-user": "WAP@CINGULARGPRS.COM",
                    "-password": "CINGULAR1",
                    "-mmsc": "http://mmsc.cingular.com",
                    "-mmsproxy": "66.209.11.32",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "480",
                    "-apn": "internet",
                    "-type": "mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "480",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "480",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "480",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "480",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "481",
                    "-apn": "internet",
                    "-type": "mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "481",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "481",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "481",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "481",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "483",
                    "-apn": "internet",
                    "-type": "mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "483",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "483",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "483",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "483",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "486",
                    "-apn": "internet",
                    "-type": "mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "486",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "486",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "486",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "486",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "310",
                    "-mnc": "489",
                    "-apn": "internet",
                    "-type": "mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "310",
                    "-mnc": "489",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "310",
                    "-mnc": "489",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "310",
                    "-mnc": "489",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "310",
                    "-mnc": "489",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "T-Mobile US 490",
                    "-mcc": "310",
                    "-mnc": "490",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "GoodCall Picture Message",
                    "-mcc": "310",
                    "-mnc": "490",
                    "-apn": "good.call",
                    "-mmsc": "http://mms.suncom.net:8088/mms",
                    "-mmsproxy": "66.150.33.125",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Suncom MMS",
                    "-mcc": "310",
                    "-mnc": "490",
                    "-apn": "mms",
                    "-mmsc": "http://mms.suncom.net:8088/mms",
                    "-mmsproxy": "66.150.33.125",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "DobsonMMS",
                    "-mcc": "310",
                    "-mnc": "560",
                    "-apn": "dobsoncellularwap",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "172.23.1.252",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "ChinookMMS",
                    "-mcc": "310",
                    "-mnc": "570",
                    "-apn": "wapgw.chinookwireless.net",
                    "-mmsc": "http://mms.cellonenation.net/mms/",
                    "-mmsproxy": "204.181.155.195",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile US 580",
                    "-mcc": "310",
                    "-mnc": "580",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "CellularOne MMS",
                    "-mcc": "310",
                    "-mnc": "590",
                    "-apn": "cellular1wap",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "172.23.1.252",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "EpicINT",
                    "-mcc": "310",
                    "-mnc": "610",
                    "-apn": "internet.epictouch",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "EpicMMS",
                    "-mcc": "310",
                    "-mnc": "610",
                    "-apn": "mms.epictouch",
                    "-mmsc": "http://mmsc.westlinkcom.com/servlets/mms",
                    "-mmsproxy": "63.99.231.135",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile US 660",
                    "-mcc": "310",
                    "-mnc": "660",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "iWireless",
                    "-mcc": "310",
                    "-mnc": "770",
                    "-apn": "i2.iwireless.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "iWireless MMS",
                    "-mcc": "310",
                    "-mnc": "770",
                    "-apn": "wap1.iwireless.com",
                    "-mmsc": "http://mmsc.iwireless.dataonair.net:6672",
                    "-mmsproxy": "209.4.229.32",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "PIAPicture Messaging",
                    "-mcc": "310",
                    "-mnc": "770",
                    "-apn": "wap9.iwireless.com",
                    "-mmsc": "http://mmsc.iwireless.dataonair.net:6672",
                    "-mmsproxy": "209.4.229.32",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "T-Mobile US 800",
                    "-mcc": "310",
                    "-mnc": "800",
                    "-apn": "epc.tmobile.com",
                    "-user": "none",
                    "-password": "none",
                    "-server": "*",
                    "-mmsc": "http://mms.msg.eng.t-mobile.com/mms/wapenc",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Internet",
                    "-mcc": "310",
                    "-mnc": "840",
                    "-apn": "isp",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS",
                    "-mcc": "310",
                    "-mnc": "840",
                    "-apn": "mms",
                    "-mmsc": "http://mms.edgemobile.net/mmsc",
                    "-mmsproxy": "12.108.12.13",
                    "-mmsport": "3128",
                    "-type": "mms"
                },
                {
                    "-carrier": "Edge MMS Prepay",
                    "-mcc": "310",
                    "-mnc": "840",
                    "-apn": "ppmms",
                    "-mmsc": "http://mms.edgemobile.net/mmsc",
                    "-mmsproxy": "12.108.12.13",
                    "-mmsport": "3128",
                    "-type": "mms"
                },
                {
                    "-carrier": "DTC MMS",
                    "-mcc": "310",
                    "-mnc": "880",
                    "-apn": "mms.adv.com",
                    "-mmsc": "http://mms.iot1.com/advantage/mms.php",
                    "-type": "mms"
                },
                {
                    "-carrier": "WOW_WAP",
                    "-mcc": "310",
                    "-mnc": "910",
                    "-apn": "wap.firstcellular.com",
                    "-mmsc": "mms.firstcellular.net/mmsc",
                    "-mmsproxy": "10.101.1.5",
                    "-mmsport": "3128",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "MMS",
                    "-mcc": "311",
                    "-mnc": "190",
                    "-apn": "wap.cellular1.net",
                    "-mmsc": "http://mms.cellular1.net/ecit/mms.php",
                    "-type": "mms"
                },
                {
                    "-carrier": "Farmers",
                    "-mcc": "311",
                    "-mnc": "210",
                    "-apn": "internet.farmerswireless.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Farmers MMS",
                    "-mcc": "311",
                    "-mnc": "210",
                    "-apn": "mms.farmers.com",
                    "-mmsc": "172.16.0.37:8514",
                    "-type": "mms"
                },
                {
                    "-carrier": "USCC",
                    "-mcc": "311",
                    "-mnc": "220",
                    "-apn": "internet",
                    "-mmsc": "http://mmsc1.uscc.net/mmsc/MMS",
                    "-authtype": "3",
                    "-port": "80",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "LTE - USCC INTERNET 2",
                    "-mcc": "311",
                    "-mnc": "225",
                    "-apn": "usccinternet",
                    "-type": "default,dun,mms,fota",
                    "-mmsc": "http://mmsc1.uscc.net/mmsc/MMS",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6",
                    "-bearer": "14"
                },
                {
                    "-carrier": "LTE INTERNET",
                    "-mcc": "311",
                    "-mnc": "230",
                    "-apn": "Internet.cs4glte.com",
                    "-type": "default,dun,mms",
                    "-authtype": "0",
                    "-mmsc": "http://pix.cspire.com/servlets/mms",
                    "-mmsproxy": "66.175.144.91",
                    "-mmsport": "80",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "14"
                },
                {
                    "-carrier": "LTE IMS",
                    "-mcc": "311",
                    "-mnc": "230",
                    "-apn": "ims.cs4glte.com",
                    "-type": "ims",
                    "-mmsc": "http://pix.cspire.com/servlets/mms",
                    "-mmsproxy": "66.175.144.91",
                    "-mmsport": "80",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "14"
                },
                {
                    "-carrier": "LTE ADMIN",
                    "-mcc": "311",
                    "-mnc": "230",
                    "-apn": "admin.cs4glte.com",
                    "-type": "fota",
                    "-mmsc": "http://pix.cspire.com/servlets/mms",
                    "-mmsproxy": "66.175.144.91",
                    "-mmsport": "80",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "14"
                },
                {
                    "-carrier": "LTE Tethering",
                    "-mcc": "311",
                    "-mnc": "230",
                    "-apn": "tethering.cs4glte.com",
                    "-type": "tethering",
                    "-mmsc": "http://pix.cspire.com/servlets/mms",
                    "-mmsproxy": "66.175.144.91",
                    "-mmsport": "80",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "14"
                },
                {
                    "-carrier": "EHRPD INTERNET",
                    "-mcc": "311",
                    "-mnc": "230",
                    "-apn": "Internet.cs4glte.com",
                    "-type": "default,dun,mms",
                    "-authtype": "0",
                    "-mmsc": "http://pix.cspire.com/servlets/mms",
                    "-mmsproxy": "66.175.144.91",
                    "-mmsport": "80",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "13"
                },
                {
                    "-carrier": "EHRPD IMS",
                    "-mcc": "311",
                    "-mnc": "230",
                    "-apn": "ims.cs4glte.com",
                    "-type": "ims",
                    "-mmsc": "http://pix.cspire.com/servlets/mms",
                    "-mmsproxy": "66.175.144.91",
                    "-mmsport": "80",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "13"
                },
                {
                    "-carrier": "EHRPD ADMIN",
                    "-mcc": "311",
                    "-mnc": "230",
                    "-apn": "admin.cs4glte.com",
                    "-type": "fota",
                    "-mmsc": "http://pix.cspire.com/servlets/mms",
                    "-mmsproxy": "66.175.144.91",
                    "-mmsport": "80",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "13"
                },
                {
                    "-carrier": "EHRPD Tethering",
                    "-mcc": "311",
                    "-mnc": "230",
                    "-apn": "tethering.cs4glte.com",
                    "-type": "tethering",
                    "-mmsc": "http://pix.cspire.com/servlets/mms",
                    "-mmsproxy": "66.175.144.91",
                    "-mmsport": "80",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "13"
                },
                {
                    "-carrier": "GCI Data",
                    "-mcc": "311",
                    "-mnc": "370",
                    "-apn": "web.gci",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "GCI MMS",
                    "-mcc": "311",
                    "-mnc": "370",
                    "-apn": "mms.gci",
                    "-mmsproxy": "209.4.229.92",
                    "-mmsport": "9201",
                    "-mmsc": "http://mmsc.gci.csky.us:6672",
                    "-type": "mms"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "311",
                    "-mnc": "480",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun,supl",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "311",
                    "-mnc": "480",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "311",
                    "-mnc": "480",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "311",
                    "-mnc": "480",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon 800",
                    "-mcc": "311",
                    "-mnc": "480",
                    "-apn": "VZW800",
                    "-type": "cas",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "311",
                    "-mnc": "482",
                    "-apn": "internet",
                    "-type": "mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "311",
                    "-mnc": "482",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "311",
                    "-mnc": "482",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "311",
                    "-mnc": "482",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "311",
                    "-mnc": "482",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon",
                    "-mcc": "311",
                    "-mnc": "485",
                    "-apn": "internet",
                    "-type": "mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon Internet",
                    "-mcc": "311",
                    "-mnc": "485",
                    "-apn": "VZWINTERNET",
                    "-type": "default,dun",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon FOTA",
                    "-mcc": "311",
                    "-mnc": "485",
                    "-apn": "VZWADMIN",
                    "-type": "fota",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon IMS",
                    "-mcc": "311",
                    "-mnc": "485",
                    "-apn": "VZWIMS",
                    "-type": "ims",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Verizon CBS",
                    "-mcc": "311",
                    "-mnc": "485",
                    "-apn": "VZWAPP",
                    "-type": "cbs,mms",
                    "-mmsc": "http://mms.vtext.com/servlets/mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Virgin Mobile US",
                    "-mcc": "311",
                    "-mnc": "490",
                    "-apn": "0",
                    "-mmsproxy": "205.239.233.136",
                    "-mmsport": "81",
                    "-mmsc": "http://mmsc.vmobl.com:8088/mms?",
                    "-type": "mms"
                },
                {
                    "-carrier": "Virgin Mobile CdmaNai",
                    "-mcc": "311",
                    "-mnc": "490",
                    "-apn": "CdmaNai",
                    "-mmsproxy": "68.28.31.2",
                    "-mmsport": "80",
                    "-mmsc": "http://mmsc.vmobl.com:8088",
                    "-type": "mms",
                    "-carrier_enabled": "false",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6",
                    "-bearer": "6"
                },
                {
                    "-carrier": "LTE - USCC INTERNET",
                    "-mcc": "311",
                    "-mnc": "580",
                    "-apn": "usccinternet",
                    "-type": "default,dun,mms,fota",
                    "-mmsc": "http://mmsc1.uscc.net/mmsc/MMS",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6",
                    "-bearer": "14"
                },
                {
                    "-carrier": "MetroPCS DEFAULT",
                    "-mcc": "311",
                    "-mnc": "660",
                    "-apn": "internet.metropcs",
                    "-type": "default,hipri,admin,mms",
                    "-authtype": "0",
                    "-mmsc": "http://mms.metropcs.net:3128/mmsc",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "14",
                    "-inactivity_timer": "7080"
                },
                {
                    "-carrier": "MetroPCS IMS",
                    "-mcc": "311",
                    "-mnc": "660",
                    "-apn": "ims.metropcs",
                    "-type": "ims",
                    "-authtype": "0",
                    "-mmsc": "http://mms.metropcs.net:3128/mmsc",
                    "-protocol": "IP",
                    "-roaming_protocol": "IP",
                    "-bearer": "14",
                    "-inactivity_timer": "7080"
                },
                {
                    "-carrier": "Boost Mobile CdmaNai",
                    "-mcc": "311",
                    "-mnc": "870",
                    "-apn": "CdmaNai",
                    "-mmsproxy": "68.28.31.7",
                    "-mmsport": "80",
                    "-mmsc": "http://mm.myboostmobile.com",
                    "-type": "mms",
                    "-carrier_enabled": "false",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6",
                    "-bearer": "6"
                },
                {
                    "-carrier": "Sprint CdmaNai",
                    "-mcc": "312",
                    "-mnc": "530",
                    "-apn": "CdmaNai",
                    "-mmsproxy": "68.28.31.7",
                    "-mmsport": "80",
                    "-mmsc": "http://mms.sprintpcs.com",
                    "-type": "mms",
                    "-carrier_enabled": "false",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6",
                    "-bearer": "6"
                },
                {
                    "-carrier": "Claro PR",
                    "-mcc": "330",
                    "-mnc": "110",
                    "-apn": "internet.claropr.com",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Claro PR MMS",
                    "-mcc": "330",
                    "-mnc": "110",
                    "-apn": "mms.claropr.com",
                    "-mmsc": "http://mmsg.claropr.com:1021/mmsc",
                    "-mmsproxy": "10.50.38.3",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "LTE CLARO",
                    "-mcc": "330",
                    "-mnc": "110",
                    "-apn": "lte.claropr.com",
                    "-authtype": "1",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS CLARO",
                    "-mcc": "330",
                    "-mnc": "110",
                    "-apn": "mmslte.claropr.com",
                    "-mmsc": "http://mmsg.claropr.com:10021/mmsc",
                    "-mmsproxy": "10.50.38.3",
                    "-mmsport": "8799",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telcel Internet",
                    "-mcc": "334",
                    "-mnc": "02",
                    "-apn": "internet.itelcel.com",
                    "-user": "webgprs",
                    "-password": "webgprs2002",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Mensajas Multimedia",
                    "-mcc": "334",
                    "-mnc": "02",
                    "-apn": "mms.itelcel.com",
                    "-user": "mmsgprs",
                    "-password": "mmsgprs2003",
                    "-mmsc": "http://mms.itelcel.com/servlets/mms",
                    "-mmsproxy": "148.233.151.240",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar MX",
                    "-mcc": "334",
                    "-mnc": "03",
                    "-apn": "internet.movistar.mx",
                    "-user": "movistar",
                    "-password": "movistar",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Movistar MX MMS",
                    "-mcc": "334",
                    "-mnc": "03",
                    "-apn": "mms.movistar.mx",
                    "-user": "movistar",
                    "-password": "movistar",
                    "-mmsc": "http://mms.movistar.mx",
                    "-mmsproxy": "10.2.20.1",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telcel EDGE",
                    "-mcc": "334",
                    "-mnc": "020",
                    "-apn": "internet.itelcel.com",
                    "-user": "webgprs",
                    "-password": "webgprs2002",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telcel MMS",
                    "-mcc": "334",
                    "-mnc": "020",
                    "-apn": "mms.itelcel.com",
                    "-user": "mmsgprs",
                    "-password": "mmsgprs2003",
                    "-mmsc": "http://mms.itelcel.com/servlets/mms",
                    "-mmsproxy": "148.233.151.240",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Digicel JM",
                    "-mcc": "338",
                    "-mnc": "50",
                    "-apn": "wap.digiceljamaica.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Digicel JM MMS",
                    "-mcc": "338",
                    "-mnc": "50",
                    "-apn": "wap.digiceljamaica.com",
                    "-user": "wapuser",
                    "-password": "wap03jam",
                    "-mmsc": "http://mms.digicelgroup.com",
                    "-mmsproxy": "172.016.007.012",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Digicel BM",
                    "-mcc": "338",
                    "-mnc": "50",
                    "-apn": "web.digicelbermuda.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Claro JM",
                    "-mcc": "338",
                    "-mnc": "70",
                    "-apn": "internet.ideasclaro.com.jm",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange World Cara?be",
                    "-mcc": "340",
                    "-mnc": "01",
                    "-apn": "orangewap",
                    "-user": "orange",
                    "-password": "wap",
                    "-proxy": "10.0.0.10",
                    "-port": "8082",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange MMS Cara?be",
                    "-mcc": "340",
                    "-mnc": "01",
                    "-apn": "orangewap",
                    "-user": "orange",
                    "-password": "orange",
                    "-mmsc": "http://193.251.160.246/servlets/mms",
                    "-mmsproxy": "10.0.0.10",
                    "-mmsport": "8082",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orangeweb",
                    "-mcc": "340",
                    "-mnc": "01",
                    "-apn": "orangeweb",
                    "-user": "orange",
                    "-password": "orange",
                    "-type": "default"
                },
                {
                    "-carrier": "Digicel BB MMS",
                    "-mcc": "342",
                    "-mnc": "750",
                    "-apn": "wap.digicelbarbados.com",
                    "-user": "wapbarb",
                    "-password": "wap03barb",
                    "-mmsc": "http://mme.digiceljamaica.com/servlets/mms",
                    "-mmsproxy": "172.016.007.012",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Digicel BB",
                    "-mcc": "342",
                    "-mnc": "750",
                    "-apn": "web.digicelbarbados.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "LIME",
                    "-mcc": "344",
                    "-mnc": "920",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Digicel VC",
                    "-mcc": "360",
                    "-mnc": "070",
                    "-apn": "wap.digiceloecs.com",
                    "-user": "wapoecs",
                    "-password": "wap03oecs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Setar MMS",
                    "-mcc": "363",
                    "-mnc": "01",
                    "-apn": "mms.setar.aw",
                    "-mmsc": "http://mms.setar.aw",
                    "-mmsproxy": "209.88.130.210",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Setar",
                    "-mcc": "363",
                    "-mnc": "01",
                    "-apn": "wap.setar.aw",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BATELCO BS",
                    "-mcc": "364",
                    "-mnc": "390",
                    "-apn": "internet.btcbahamas.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange net",
                    "-mcc": "370",
                    "-mnc": "01",
                    "-apn": "orangenet.com.do",
                    "-authtype": "1",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "370",
                    "-mnc": "01",
                    "-apn": "orangeworld",
                    "-user": "orange",
                    "-password": "orange",
                    "-mmsproxy": "172.16.126.70",
                    "-mmsport": "8080",
                    "-mmsc": "http://mms.orange.com.do/servlets/mms",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange DO MMS",
                    "-mcc": "370",
                    "-mnc": "01",
                    "-apn": "orangeworld",
                    "-mmsc": "http://mmr.orangewi.com/servlets/mms",
                    "-mmsproxy": "172.16.126.70",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange DO",
                    "-mcc": "370",
                    "-mnc": "01",
                    "-apn": "orangenet.com.do",
                    "-type": "default"
                },
                {
                    "-carrier": "Trilogy Dominicana",
                    "-mcc": "370",
                    "-mnc": "04",
                    "-apn": "edge.viva.net.do",
                    "-mmsproxy": "192.168.16.10",
                    "-mmsport": "9401",
                    "-user": "viva",
                    "-password": "viva",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Azercell",
                    "-mcc": "400",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Azercell MMS",
                    "-mcc": "400",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-mmsc": "http://mms.azercell.com/cMMSC/post",
                    "-mmsproxy": "10.0.154.101",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Bakcell",
                    "-mcc": "400",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-mmsc": "http://mms.bakcell.com/mms/wapenc",
                    "-mmsproxy": "213.172.091.046",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Nar",
                    "-mcc": "400",
                    "-mnc": "04",
                    "-apn": "nar",
                    "-user": "nar",
                    "-password": "nar",
                    "-mmsc": "http://mmsc",
                    "-mmsproxy": "10.20.0.40",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "BeeLine KZ",
                    "-mcc": "401",
                    "-mnc": "01",
                    "-apn": "internet.beeline.kz",
                    "-user": "internet.beeline",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Kcell",
                    "-mcc": "401",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Kcell MMS",
                    "-mcc": "401",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-mmsc": "http://mms.kcell.kz/post",
                    "-mmsproxy": "195.047.255.007",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "01",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "01",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "02",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "03",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "04",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "04",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "05",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "05",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "07",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "07",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "404",
                    "-mnc": "09",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "404",
                    "-mnc": "09",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "10",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "11",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "11",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "12",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "12",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "RCOM",
                    "-mcc": "404",
                    "-mnc": "013",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "13",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "13",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "14",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "14",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SPICE",
                    "-mcc": "404",
                    "-mnc": "14",
                    "-apn": "spicegprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SPICE MMS",
                    "-mcc": "404",
                    "-mnc": "14",
                    "-apn": "spicemms",
                    "-user": "User Mobile number",
                    "-password": "spice",
                    "-mmsc": "http://10.200.200.3:8514",
                    "-mmsproxy": "10.200.200.3",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "15",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "15",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "16",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "404",
                    "-mnc": "17",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "404",
                    "-mnc": "17",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "404",
                    "-mnc": "18",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "404",
                    "-mnc": "18",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "19",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "19",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "20",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "20",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BPL MMS",
                    "-mcc": "404",
                    "-mnc": "21",
                    "-apn": "mizone",
                    "-user": "MSISDN",
                    "-password": "bplmmsc",
                    "-mmsc": "http://mms.bplmobile.com:8080",
                    "-mmsproxy": "10.0.0.10",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BPL",
                    "-mcc": "404",
                    "-mnc": "21",
                    "-apn": "www",
                    "-user": "MSISDN",
                    "-password": "bplmmsc",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "22",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "22",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "24",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "24",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "404",
                    "-mnc": "25",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "404",
                    "-mnc": "25",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "27",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "27",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "404",
                    "-mnc": "28",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "404",
                    "-mnc": "28",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "404",
                    "-mnc": "29",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "404",
                    "-mnc": "29",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "30",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "30",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "31",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "404",
                    "-mnc": "33",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "404",
                    "-mnc": "33",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "34",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "34",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "404",
                    "-mnc": "35",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "404",
                    "-mnc": "35",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "404",
                    "-mnc": "36",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "404",
                    "-mnc": "36",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "404",
                    "-mnc": "37",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "404",
                    "-mnc": "37",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "38",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "38",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "40",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "404",
                    "-mnc": "41",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "404",
                    "-mnc": "41",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "404",
                    "-mnc": "42",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "404",
                    "-mnc": "42",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "43",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "43",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "44",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "44",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SPICE",
                    "-mcc": "404",
                    "-mnc": "44",
                    "-apn": "spicegprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SPICE MMS",
                    "-mcc": "404",
                    "-mnc": "44",
                    "-apn": "spicemms",
                    "-user": "User Mobile number",
                    "-password": "spice",
                    "-mmsc": "http://10.200.200.3:8514",
                    "-mmsproxy": "10.200.200.3",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "45",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "BPL MMS",
                    "-mcc": "404",
                    "-mnc": "46",
                    "-apn": "mizone",
                    "-user": "MSISDN",
                    "-password": "bplmmsc",
                    "-mmsc": "http://mms.bplmobile.com:8080",
                    "-mmsproxy": "10.0.0.10",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BPL",
                    "-mcc": "404",
                    "-mnc": "46",
                    "-apn": "www",
                    "-user": "MSISDN",
                    "-password": "bplmmsc",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "49",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "404",
                    "-mnc": "50",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "404",
                    "-mnc": "50",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "51",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "51",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "404",
                    "-mnc": "52",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "404",
                    "-mnc": "52",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "53",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "53",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "54",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "54",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "55",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "55",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "56",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "56",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "57",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "57",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "58",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "58",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "59",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "59",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "60",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "60",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "62",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "62",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "64",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "64",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "66",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "66",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "404",
                    "-mnc": "67",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "404",
                    "-mnc": "67",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTNL",
                    "-mcc": "404",
                    "-mnc": "68",
                    "-apn": "mtnl.net",
                    "-user": "mtnl",
                    "-password": "mtnl123",
                    "-proxy": "10.10.10.10",
                    "-port": "9401",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTNL MMS",
                    "-mcc": "404",
                    "-mnc": "68",
                    "-apn": "mtnl.net",
                    "-user": "mtnl",
                    "-password": "mtnl123",
                    "-mmsc": "http://mtnlmms/",
                    "-mmsproxy": "10.10.10.10",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "MTNL",
                    "-mcc": "404",
                    "-mnc": "69",
                    "-apn": "mtnl.net",
                    "-user": "mtnl",
                    "-password": "mtnl123",
                    "-proxy": "10.10.10.10",
                    "-port": "9401",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTNL MMS",
                    "-mcc": "404",
                    "-mnc": "69",
                    "-apn": "mtnl.net",
                    "-user": "mtnl",
                    "-password": "mtnl123",
                    "-mmsc": "http://mtnlmms/",
                    "-mmsproxy": "10.10.10.10",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "70",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "71",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "71",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "72",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "72",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "73",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "73",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "74",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "74",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "75",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "75",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "76",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "76",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "77",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "77",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "78",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "78",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "80",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "80",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "BSNL",
                    "-mcc": "404",
                    "-mnc": "81",
                    "-apn": "bsnlnet",
                    "-user": "MSISDN",
                    "-password": "MSISDN",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BSNL MMS",
                    "-mcc": "404",
                    "-mnc": "81",
                    "-apn": "mmssouth.cellone.in",
                    "-user": "MSISDN",
                    "-password": "mmsc",
                    "-mmsc": "http://10.7.236.11:8514",
                    "-mmsproxy": "10.7.236.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "82",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "82",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "404",
                    "-mnc": "83",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "404",
                    "-mnc": "83",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "84",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "84",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "404",
                    "-mnc": "85",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "404",
                    "-mnc": "85",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "India Hutch",
                    "-mcc": "404",
                    "-mnc": "86",
                    "-apn": "portalnmms",
                    "-proxy": "10.10.1.100",
                    "-port": "9401",
                    "-mmsc": "http://mms1.hutchworld.co.in/mms/",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "86",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "86",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "87",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "87",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "88",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "404",
                    "-mnc": "88",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "404",
                    "-mnc": "89",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "404",
                    "-mnc": "89",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "90",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "404",
                    "-mnc": "91",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "404",
                    "-mnc": "91",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "92",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "93",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "94",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "95",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "96",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "97",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "404",
                    "-mnc": "98",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "404",
                    "-mnc": "751",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "01",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "01",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "03",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "03",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "05",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "05",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "06",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "06",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "07",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "07",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "08",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "08",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "09",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "09",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "10",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "10",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "11",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "11",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "12",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "12",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "13",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "13",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "14",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "14",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "15",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "15",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "17",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "17",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "18",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "18",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "19",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "19",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "20",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "20",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "21",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "21",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "22",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "22",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Reliance MMS",
                    "-mcc": "405",
                    "-mnc": "23",
                    "-apn": "rcommms",
                    "-mmsc": "http://mms.rcom.co.in:6081/mms",
                    "-mmsproxy": "10.239.221.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Reliance",
                    "-mcc": "405",
                    "-mnc": "23",
                    "-apn": "rcomnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "025",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "025",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "026",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "026",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "027",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "027",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "029",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "029",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "030",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "030",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "031",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "031",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "032",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "032",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "033",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "033",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "034",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "034",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "035",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "035",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "036",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "036",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "037",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "037",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "038",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "038",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "039",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "039",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "040",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "040",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "041",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "041",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "042",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "042",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "043",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "043",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "044",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "044",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "045",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "045",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "046",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "046",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "TA TA DoCoMo",
                    "-mcc": "405",
                    "-mnc": "047",
                    "-apn": "TATA.DOCOMO.INTERNET",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TA TA DoCoMo MMS",
                    "-mcc": "405",
                    "-mnc": "047",
                    "-apn": "TATA.DOCOMO.MMS",
                    "-mmsc": "http://mmsc/",
                    "-mmsproxy": "10.124.26.94",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "405",
                    "-mnc": "51",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "405",
                    "-mnc": "52",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "405",
                    "-mnc": "53",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "405",
                    "-mnc": "54",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "405",
                    "-mnc": "55",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Airtel",
                    "-mcc": "405",
                    "-mnc": "56",
                    "-apn": "airtelgprs.com",
                    "-mmsc": "http://100.1.201.171:10021/mmsc",
                    "-mmsproxy": "100.1.201.172",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "405",
                    "-mnc": "66",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "405",
                    "-mnc": "66",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "405",
                    "-mnc": "67",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "405",
                    "-mnc": "67",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "405",
                    "-mnc": "70",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "405",
                    "-mnc": "70",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "405",
                    "-mnc": "750",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "405",
                    "-mnc": "750",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "405",
                    "-mnc": "751",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "405",
                    "-mnc": "752",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "405",
                    "-mnc": "752",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "405",
                    "-mnc": "753",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "405",
                    "-mnc": "753",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "405",
                    "-mnc": "754",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "405",
                    "-mnc": "754",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "405",
                    "-mnc": "755",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "405",
                    "-mnc": "755",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone IN MMS",
                    "-mcc": "405",
                    "-mnc": "756",
                    "-apn": "portalnmms",
                    "-mmsc": "http://mms1.live.vodafone.in/mms/",
                    "-mmsproxy": "10.10.1.100",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone IN",
                    "-mcc": "405",
                    "-mnc": "756",
                    "-apn": "www",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "405",
                    "-mnc": "799",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "405",
                    "-mnc": "799",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "800",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "800",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "801",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "801",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "802",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "802",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "803",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "803",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "804",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "804",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "805",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "805",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "807",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "807",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "808",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "808",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "809",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "809",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "810",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "810",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "811",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "811",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "Aircel",
                    "-mcc": "405",
                    "-mnc": "812",
                    "-apn": "aircelgprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Aircel MMS",
                    "-mcc": "405",
                    "-mnc": "812",
                    "-apn": "aircelmms",
                    "-mmsc": "http://mmsc/mmrelay.app",
                    "-mmsproxy": "192.168.35.196",
                    "-mmsport": "8081",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "405",
                    "-mnc": "845",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "405",
                    "-mnc": "845",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "405",
                    "-mnc": "846",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "405",
                    "-mnc": "846",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "405",
                    "-mnc": "847",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "405",
                    "-mnc": "847",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "405",
                    "-mnc": "848",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "405",
                    "-mnc": "848",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "405",
                    "-mnc": "849",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "405",
                    "-mnc": "849",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "405",
                    "-mnc": "850",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "405",
                    "-mnc": "850",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "405",
                    "-mnc": "851",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "405",
                    "-mnc": "851",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "405",
                    "-mnc": "852",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "405",
                    "-mnc": "852",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IDEA",
                    "-mcc": "405",
                    "-mnc": "853",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEA MMS",
                    "-mcc": "405",
                    "-mnc": "853",
                    "-apn": "mmsc",
                    "-mmsc": "http://10.4.42.21:8002/",
                    "-mmsproxy": "10.4.42.15",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SPICE",
                    "-mcc": "405",
                    "-mnc": "908",
                    "-apn": "spicegprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SPICE MMS",
                    "-mcc": "405",
                    "-mnc": "908",
                    "-apn": "spicemms",
                    "-user": "User Mobile number",
                    "-password": "spice",
                    "-mmsc": "http://10.200.200.3:8514",
                    "-mmsproxy": "10.200.200.3",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SPICE",
                    "-mcc": "405",
                    "-mnc": "909",
                    "-apn": "spicegprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SPICE MMS",
                    "-mcc": "405",
                    "-mnc": "909",
                    "-apn": "spicemms",
                    "-user": "User Mobile number",
                    "-password": "spice",
                    "-mmsc": "http://10.200.200.3:8514",
                    "-mmsproxy": "10.200.200.3",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SPICE",
                    "-mcc": "405",
                    "-mnc": "910",
                    "-apn": "spicegprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SPICE MMS",
                    "-mcc": "405",
                    "-mnc": "910",
                    "-apn": "spicemms",
                    "-user": "User Mobile number",
                    "-password": "spice",
                    "-mmsc": "http://10.200.200.3:8514",
                    "-mmsproxy": "10.200.200.3",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SPICE",
                    "-mcc": "405",
                    "-mnc": "911",
                    "-apn": "spicegprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SPICE MMS",
                    "-mcc": "405",
                    "-mnc": "911",
                    "-apn": "spicemms",
                    "-user": "User Mobile number",
                    "-password": "spice",
                    "-mmsc": "http://10.200.200.3:8514",
                    "-mmsproxy": "10.200.200.3",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobilink",
                    "-mcc": "410",
                    "-mnc": "01",
                    "-apn": "connect.mobilinkworld.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Mobilink MMS",
                    "-mcc": "410",
                    "-mnc": "01",
                    "-apn": "mms.mobilinkworld.com",
                    "-user": "mobilink",
                    "-password": "mobilink",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "172.025.020.012",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Ufone MMS",
                    "-mcc": "410",
                    "-mnc": "03",
                    "-apn": "ufone.mms",
                    "-mmsc": "http://www.ufone.com",
                    "-mmsproxy": "172.16.13.27",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Ufone",
                    "-mcc": "410",
                    "-mnc": "03",
                    "-apn": "ufone.pinternet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Zong",
                    "-mcc": "410",
                    "-mnc": "04",
                    "-apn": "zonginternet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Zong MMS",
                    "-mcc": "410",
                    "-mnc": "04",
                    "-apn": "zongmms",
                    "-mmsc": "10.81.6.11",
                    "-mmsproxy": "10.81.6.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telenor PK",
                    "-mcc": "410",
                    "-mnc": "06",
                    "-apn": "internet",
                    "-user": "Telenor",
                    "-password": "Telenor",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telenor PK MMS",
                    "-mcc": "410",
                    "-mnc": "06",
                    "-apn": "mms",
                    "-user": "Telenor",
                    "-password": "Telenor",
                    "-mmsc": "http://mmstelenor",
                    "-mmsproxy": "172.18.19.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Warid PK MMS",
                    "-mcc": "410",
                    "-mnc": "07",
                    "-apn": "mms.warid",
                    "-mmsc": "http://10.4.0.132/servlets/MMS",
                    "-mmsproxy": "010.004.002.001",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Warid PK",
                    "-mcc": "410",
                    "-mnc": "07",
                    "-apn": "warid",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Dialog Mobile Broadband",
                    "-mcc": "413",
                    "-mnc": "02",
                    "-apn": "dialogbb",
                    "-server": "dialog",
                    "-mmsc": "http://mms.dialog.lk:3130/mmsc",
                    "-mmsproxy": "192.168.122.002",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Mobitel",
                    "-mcc": "413",
                    "-mnc": "01",
                    "-apn": "mobitel3g",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Mobitel MMS",
                    "-mcc": "413",
                    "-mnc": "01",
                    "-apn": "wapmms",
                    "-mmsc": "http://192.168.50.165",
                    "-mmsproxy": "192.168.50.163",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Etisalat",
                    "-mcc": "413",
                    "-mnc": "03",
                    "-apn": "ebb",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Etisalat MMS",
                    "-mcc": "413",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-mmsc": "http://mms.etisalt.lk:8085",
                    "-mmsproxy": "192.168.104.4",
                    "-mmsport": "9401",
                    "-type": "mms"
                },
                {
                    "-carrier": "Alfa",
                    "-mcc": "415",
                    "-mnc": "01",
                    "-apn": "internet.mic1.com.lb",
                    "-user": "mic1",
                    "-password": "mic1",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Alfa MMS",
                    "-mcc": "415",
                    "-mnc": "01",
                    "-apn": "mms.mic1.com.lb",
                    "-user": "mic1",
                    "-password": "mic1",
                    "-mmsc": "http://mms.mic1.com.lb",
                    "-mmsproxy": "192.168.23.51",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Alfa WAP",
                    "-mcc": "415",
                    "-mnc": "01",
                    "-apn": "wap.mic1.com.lb",
                    "-user": "mic1",
                    "-password": "mic1",
                    "-proxy": "192.168.023.050",
                    "-port": "80",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "mtc touch",
                    "-mcc": "415",
                    "-mnc": "03",
                    "-apn": "gprs.mtctouch.com.lb",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Alfa MMS",
                    "-mcc": "415",
                    "-mnc": "03",
                    "-apn": "mms.mic1.com.lb",
                    "-user": "mic1",
                    "-password": "mic1",
                    "-mmsc": "http://mms.mic1.com.lb",
                    "-mmsproxy": "192.168.23.51",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "mtc touch MMS",
                    "-mcc": "415",
                    "-mnc": "03",
                    "-apn": "mms.mtctouch.com.lb",
                    "-user": "mtctouch",
                    "-mmsc": "http://mms:8080/mms/",
                    "-mmsproxy": "192.168.4.103",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Alfa WAP",
                    "-mcc": "415",
                    "-mnc": "03",
                    "-apn": "wap.mic1.com.lb",
                    "-user": "mic1",
                    "-password": "mic1",
                    "-proxy": "192.168.023.050",
                    "-port": "80",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Zain JO Postpaid",
                    "-mcc": "416",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Zain JO Prepaid",
                    "-mcc": "416",
                    "-mnc": "01",
                    "-apn": "internetpre",
                    "-user": "zain",
                    "-password": "zain",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Zain JO WAP",
                    "-mcc": "416",
                    "-mnc": "01",
                    "-apn": "zain",
                    "-user": "zain",
                    "-password": "zain",
                    "-proxy": "192.168.55.10",
                    "-port": "80",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Zain JO Internet",
                    "-mcc": "416",
                    "-mnc": "01",
                    "-apn": "zain",
                    "-user": "zain",
                    "-password": "zain",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Zain JO MMS",
                    "-mcc": "416",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.jo.zain.com",
                    "-mmsproxy": "192.168.55.10",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Umniah MMS",
                    "-mcc": "416",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-mmsc": "http://mms.umniah.com/",
                    "-mmsproxy": "10.1.1.10",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Umniah",
                    "-mcc": "416",
                    "-mnc": "03",
                    "-apn": "net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "416",
                    "-mnc": "77",
                    "-apn": "mms.orange.jo",
                    "-user": "mmc",
                    "-password": "mmc",
                    "-mmsc": "http://172.16.1.96/servlets/mms",
                    "-mmsproxy": "172.16.1.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange Internet",
                    "-mcc": "416",
                    "-mnc": "77",
                    "-apn": "net.orange.jo",
                    "-user": "net",
                    "-password": "net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Syriatel MMS",
                    "-mcc": "417",
                    "-mnc": "01",
                    "-apn": "mms.syriatel.com",
                    "-mmsc": "http://mymms.syriatel.com/",
                    "-mmsproxy": "172.20.5.6",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Syriatel",
                    "-mcc": "417",
                    "-mnc": "01",
                    "-apn": "net.syriatel.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTN SY",
                    "-mcc": "417",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTN SY MMS",
                    "-mcc": "417",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-mmsc": "http://10.11.161.138/:10021/mmsc",
                    "-mmsproxy": "10.11.161.131",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Zain KW",
                    "-mcc": "419",
                    "-mnc": "02",
                    "-apn": "pps",
                    "-user": "pps",
                    "-password": "pps",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Zain KW MMS",
                    "-mcc": "419",
                    "-mnc": "02",
                    "-apn": "pps",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.zain",
                    "-mmsproxy": "176.0.0.65",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Viva KW",
                    "-mcc": "419",
                    "-mnc": "04",
                    "-apn": "viva",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Viva KW MMS",
                    "-mcc": "419",
                    "-mnc": "04",
                    "-apn": "viva",
                    "-mmsc": "http://172.16.128.80:38090/was",
                    "-mmsproxy": "172.16.128.228",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "MTC Vodafone KW",
                    "-mcc": "419",
                    "-mnc": "2",
                    "-apn": "apn01",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTC Vodafone KW MMS",
                    "-mcc": "419",
                    "-mnc": "2",
                    "-apn": "mms",
                    "-user": "annyway",
                    "-password": "online",
                    "-mmsc": "http://176.000.000.021",
                    "-mmsproxy": "176.0.0.65",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "wataniya",
                    "-mcc": "419",
                    "-mnc": "3",
                    "-apn": "action.wataniya.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "wataniya MMS",
                    "-mcc": "419",
                    "-mnc": "3",
                    "-apn": "mms.wataniya.com",
                    "-mmsc": "http://action.wataniya.com",
                    "-mmsproxy": "194.126.053.064",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "AL JA WAL",
                    "-mcc": "420",
                    "-mnc": "01",
                    "-apn": "jawalnet.com.sa",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "AL JA WAL MMS",
                    "-mcc": "420",
                    "-mnc": "01",
                    "-apn": "mms.net.sa",
                    "-mmsc": "http://mms.net.sa:8002",
                    "-mmsproxy": "10.1.1.1",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobily MMS",
                    "-mcc": "420",
                    "-mnc": "03",
                    "-apn": "mms1",
                    "-mmsc": "http://10.3.3.133:9090/was",
                    "-mmsproxy": "10.3.2.133",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobily",
                    "-mcc": "420",
                    "-mnc": "03",
                    "-apn": "web1",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Zain SA",
                    "-mcc": "420",
                    "-mnc": "04",
                    "-apn": "zain",
                    "-mmsc": "http://10.122.200.12:8002",
                    "-mmsproxy": "10.122.200.10",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Oman Mobile MMS",
                    "-mcc": "422",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mmsc.omanmobile.com:10021/mmsc",
                    "-mmsproxy": "192.168.203.35",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Oman Mobile",
                    "-mcc": "422",
                    "-mnc": "02",
                    "-apn": "wap",
                    "-user": "wap",
                    "-password": "wap",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Nawras",
                    "-mcc": "422",
                    "-mnc": "03",
                    "-apn": "isp.nawras.com.om",
                    "-user": "test",
                    "-password": "test",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Nawras MMS",
                    "-mcc": "422",
                    "-mnc": "03",
                    "-apn": "mms.nawras.com.om",
                    "-user": "test",
                    "-password": "test",
                    "-proxy": "10.128.240.19",
                    "-port": "8080",
                    "-mmsc": "http://10.128.240.16/servlets/mms",
                    "-mmsproxy": "10.128.240.19",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Etisalat UAE",
                    "-mcc": "424",
                    "-mnc": "02",
                    "-apn": "etisalat.ae",
                    "-type": "default,supl",
                    "-authtype": "1"
                },
                {
                    "-carrier": "Etisalat UAE MMS",
                    "-mcc": "424",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms/servlets/mms",
                    "-mmsproxy": "10.12.0.32",
                    "-mmsport": "8080",
                    "-type": "mms",
                    "-authtype": "1"
                },
                {
                    "-carrier": "du",
                    "-mcc": "424",
                    "-mnc": "03",
                    "-apn": "du",
                    "-mmsc": "http://mms.du.ae",
                    "-mmsproxy": "10.19.18.4",
                    "-mmsport": "9201",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "3G Portal",
                    "-mcc": "425",
                    "-mnc": "01",
                    "-apn": "uwap.orange.co.il",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS 3G",
                    "-mcc": "425",
                    "-mnc": "01",
                    "-apn": "uwap.orange.co.il",
                    "-mmsc": "http://192.168.220.15/servlets/mms",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Internet 3G",
                    "-mcc": "425",
                    "-mnc": "01",
                    "-apn": "modem.orange.net.il",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "CellCOM",
                    "-mcc": "425",
                    "-mnc": "02",
                    "-apn": "internetg",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "CellCOM MMS",
                    "-mcc": "425",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-mmsc": "http://mms.cellcom.co.il",
                    "-mmsproxy": "172.31.29.38",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Pelephone",
                    "-mcc": "425",
                    "-mnc": "03",
                    "-apn": "internet.pelephone.net.il",
                    "-user": "pcl@3g",
                    "-password": "pcl",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Pelephone MMS",
                    "-mcc": "425",
                    "-mnc": "03",
                    "-apn": "mms.pelephone.net.il",
                    "-user": "pcl@3g",
                    "-password": "pcl",
                    "-server": "pelephone",
                    "-mmsc": "http://mmsu.pelephone.net.il",
                    "-mmsproxy": "10.170.9.54",
                    "-mmsport": "9093",
                    "-type": "mms"
                },
                {
                    "-carrier": "Rami Levy",
                    "-mcc": "425",
                    "-mnc": "03",
                    "-apn": "internet.rl",
                    "-user": "rl@3g",
                    "-password": "rl",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Rami Levey MMS",
                    "-mcc": "425",
                    "-mnc": "03",
                    "-apn": "internet.rl",
                    "-user": "rl@3g",
                    "-password": "rl",
                    "-server": "pelephone",
                    "-mmsc": "http://mmsu.pelephone.net.il",
                    "-mmsproxy": "10.170.9.54",
                    "-mmsport": "9093",
                    "-type": "mms"
                },
                {
                    "-carrier": "Pelephone Internet Static",
                    "-mcc": "425",
                    "-mnc": "03",
                    "-apn": "org.pelephone.net.il",
                    "-user": "pcl@rsingle",
                    "-password": "pcl",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Jawwal Internet",
                    "-mcc": "425",
                    "-mnc": "05",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Jawwal WAP",
                    "-mcc": "425",
                    "-mnc": "05",
                    "-apn": "wap",
                    "-proxy": "213.244.118.129",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Jawwal MMS",
                    "-mcc": "425",
                    "-mnc": "05",
                    "-apn": "mms",
                    "-mmsc": "http://mms.jawwal.ps/servlets/mms",
                    "-mmsproxy": "213.244.118.129",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Hot Mobile",
                    "-mcc": "425",
                    "-mnc": "07",
                    "-apn": "net.hotm",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Hot Mobile MMS",
                    "-mcc": "425",
                    "-mnc": "07",
                    "-apn": "mms.hotm",
                    "-mmsc": "http://mms.hotmobile.co.il",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Golan Telecom",
                    "-mcc": "425",
                    "-mnc": "08",
                    "-apn": "internet.golantelecom.net.il",
                    "-authtype": "0",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Golan Telecom MMS",
                    "-mcc": "425",
                    "-mnc": "08",
                    "-apn": "mms.golantelecom.net.il",
                    "-mmsc": "http://mmsc.golantelecom.co.il",
                    "-mmsproxy": "10.224.228.81",
                    "-mmsport": "80",
                    "-authtype": "0",
                    "-type": "mms"
                },
                {
                    "-carrier": "YouPhone 3G",
                    "-mcc": "425",
                    "-mnc": "14",
                    "-apn": "data.youphone.co.il",
                    "-mmsc": "http://192.168.220.15/servlets/mms",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "BATELCO BH",
                    "-mcc": "426",
                    "-mnc": "01",
                    "-apn": "internet.batelco.com",
                    "-user": "internet",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BATELCO BH MMS",
                    "-mcc": "426",
                    "-mnc": "01",
                    "-apn": "mms.batelco.com",
                    "-user": "wap",
                    "-password": "wap",
                    "-mmsc": "http://192.168.36.10/servlets/mms",
                    "-mmsproxy": "192.168.1.2",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "MTC Vodafone BH",
                    "-mcc": "426",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-user": "internet",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTC Vodafone BH MMS",
                    "-mcc": "426",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://172.18.83.129",
                    "-mmsproxy": "172.18.85.34",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Viva BH",
                    "-mcc": "426",
                    "-mnc": "04",
                    "-apn": "viva.bh",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Viva BH MMS",
                    "-mcc": "426",
                    "-mnc": "04",
                    "-apn": "vivawap.bh",
                    "-mmsc": "http://mms.viva.com.bh:38090",
                    "-mmsproxy": "172.18.142.36",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Q-tel MMS",
                    "-mcc": "427",
                    "-mnc": "01",
                    "-apn": "mms.qtel",
                    "-user": "mms",
                    "-password": "gprs",
                    "-mmsc": "http://mmsr.qtelmma.qa",
                    "-mmsproxy": "10.23.8.3",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Q-tel",
                    "-mcc": "427",
                    "-mnc": "01",
                    "-apn": "web.qtel",
                    "-user": "gprs",
                    "-password": "gprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone QA MMS",
                    "-mcc": "427",
                    "-mnc": "02",
                    "-apn": "vodafone.com.qa",
                    "-mmsc": "http://mms.vodafone.com.qa/mmsc",
                    "-mmsproxy": "10.101.97.102",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone QA",
                    "-mcc": "427",
                    "-mnc": "02",
                    "-apn": "web.vodafone.com.qa",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Beeline UZ",
                    "-mcc": "434",
                    "-mnc": "04",
                    "-apn": "internet.beeline.uz",
                    "-user": "beeline",
                    "-password": "beeline",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Beeline UZ MMS",
                    "-mcc": "434",
                    "-mnc": "04",
                    "-apn": "mms.beeline.uz",
                    "-user": "beeline",
                    "-password": "beeline",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "172.30.30.166",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "mopera U",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "mopera.net",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "mopera U Bizho",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "mpr2.bizho.net",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "mopera U FF",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "open.mopera.net",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "mopera U Flat",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "mopera.flat.foma.ne.jp",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "sp��`��",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "spmode.ne.jp",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "b-mobile 1GB/Fair",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "bmobile.ne.jp",
                    "-user": "bmobile@fr",
                    "-password": "bmobile",
                    "-authtype": "3"
                },
                {
                    "-carrier": "b-mobile 6����/���ީ`��SIM",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "bmobile.ne.jp",
                    "-user": "bmobile@4g",
                    "-password": "bmobile",
                    "-authtype": "3"
                },
                {
                    "-carrier": "b-mobile U300",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "bmobile.ne.jp",
                    "-user": "bmobile@u300",
                    "-password": "bmobile",
                    "-authtype": "3"
                },
                {
                    "-carrier": "b-mobile X SIM",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "bmobile.ne.jp",
                    "-user": "bmobile@xsim",
                    "-password": "bmobile",
                    "-authtype": "3"
                },
                {
                    "-carrier": "b-mobile ���ޥ���",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "bmobile.ne.jp",
                    "-user": "bmobile@am",
                    "-password": "bmobile",
                    "-authtype": "3"
                },
                {
                    "-carrier": "b-mobile ������",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "bmobile.ne.jp",
                    "-user": "bmobile@aeon",
                    "-password": "bmobile",
                    "-authtype": "3"
                },
                {
                    "-carrier": "b-mobile ���ޥ��Ԓ",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "bmobile.ne.jp",
                    "-user": "bmobile@spd",
                    "-password": "bmobile",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "b-mobile ��ɥХ�",
                    "-mcc": "440",
                    "-mnc": "10",
                    "-apn": "bmobile.ne.jp",
                    "-user": "bmobile@zsim",
                    "-password": "bmobile",
                    "-authtype": "3"
                },
                {
                    "-carrier": "EMOBILE 4G-S",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "plus.acs.jp",
                    "-user": "plusw6q9tattkmpk",
                    "-password": "msfbbam83bsdetxb",
                    "-mmsc": "http://mms-s",
                    "-mmsproxy": "andmms.plusacs.ne.jp",
                    "-mmsport": "8080",
                    "-authtype": "2",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "SoftBank Andglobal",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "andglobal.softbank.ne.jp",
                    "-user": "andg001softbank",
                    "-password": "pumbbghkpgyysxa",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "andmms.softbank.ne.jp",
                    "-mmsport": "8080",
                    "-type": "default,mms"
                },
                {
                    "-carrier": "SoftBank Andoworld",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "andoworld.softbank.ne.jp",
                    "-authtype": "2",
                    "-type": "default,mms,supl,hipri"
                },
                {
                    "-carrier": "SoftBank JPspir",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "jpspir",
                    "-user": "sirobit",
                    "-password": "amstkoi",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "smilemms.softbank.ne.jp",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "SoftBank Open",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "open.softbank.ne.jp",
                    "-user": "opensoftbank",
                    "-password": "ebMNuX1FIHg9d3DA",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "mmsopen.softbank.ne.jp",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "SoftBank Open Desire",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "open.softbank.ne.jp",
                    "-user": "softbankX06HT",
                    "-password": "KfNSDrQQs2AtFQ9M",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "andmms.softbank.ne.jp",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "SoftBank Pay for Use",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "softbank",
                    "-user": "ai@softbank",
                    "-password": "softbank",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SoftBank Plus",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "plus.softbank",
                    "-user": "plus",
                    "-password": "softbank",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "andmms.softbank.ne.jp",
                    "-mmsport": "8080",
                    "-authtype": "3",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "SoftBank SBM",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "sbm",
                    "-user": "data",
                    "-password": "softbank"
                },
                {
                    "-carrier": "SoftBank SBM4GLTE",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "sbm4glte",
                    "-user": "data",
                    "-password": "softbank"
                },
                {
                    "-carrier": "SoftBank Smile World",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "smile.world",
                    "-user": "dna1trop",
                    "-password": "so2t3k3m2a",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "smilemms.softbank.ne.jp",
                    "-mmsport": "8080",
                    "-authtype": "1",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "SoftBank �ץ��Х���",
                    "-mcc": "440",
                    "-mnc": "20",
                    "-apn": "mailwebservice.softbank.ne.jp",
                    "-user": "softbank",
                    "-password": "qceffknarlurqgbl",
                    "-server": "http://mms/",
                    "-proxy": "sbwapproxy.softbank.ne.jp",
                    "-port": "8080",
                    "-mmsc": "http://mms/",
                    "-mmsproxy": "sbmmsproxy.softbank.ne.jp",
                    "-mmsport": "8080",
                    "-authtype": "3"
                },
                {
                    "-carrier": "au LTE NET",
                    "-mcc": "440",
                    "-mnc": "50",
                    "-apn": "uno.au-net.ne.jp",
                    "-user": "685840734641020@uno.au-net.ne.jp",
                    "-password": "KpyrR6BP",
                    "-authtype": "2",
                    "-type": "default,mms,supl,hipri",
                    "-state": "readonly",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IP"
                },
                {
                    "-carrier": "au LTE NET for DATA",
                    "-mcc": "440",
                    "-mnc": "50",
                    "-apn": "au.au-net.ne.jp",
                    "-user": "user@au.au-net.ne.jp",
                    "-password": "au",
                    "-authtype": "2",
                    "-type": "default,mms,supl,hipri",
                    "-state": "readonly",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IP"
                },
                {
                    "-carrier": "SKT3G",
                    "-mcc": "450",
                    "-mnc": "05",
                    "-apn": "web.sktelecom.com",
                    "-mmsc": "http://omms.nate.com:9082/oma_mms",
                    "-mmsproxy": "smart.nate.com",
                    "-mmsport": "9093",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "SK Telecom (Roaming)",
                    "-mcc": "450",
                    "-mnc": "05",
                    "-apn": "roaming.sktelecom.com",
                    "-server": "*",
                    "-mmsc": "vmms.nate.com",
                    "-mmsport": "8082",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "SKT LTE",
                    "-mcc": "450",
                    "-mnc": "05",
                    "-apn": "lte.sktelecom.com",
                    "-mmsc": "http://omms.nate.com:9082/oma_mms",
                    "-mmsproxy": "smart.nate.com",
                    "-mmsport": "9093",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "KT-HSDPA",
                    "-mcc": "450",
                    "-mnc": "08",
                    "-apn": "alwayson-r6.ktfwing.com",
                    "-mmsc": "http://mmsc.ktfwing.com:9082",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "KT-LTE",
                    "-mcc": "450",
                    "-mnc": "08",
                    "-apn": "lte.ktfwing.com",
                    "-mmsc": "http://mmsc.ktfwing.com:9082",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Mobifone MMS",
                    "-mcc": "452",
                    "-mnc": "01",
                    "-apn": "m-i090",
                    "-user": "wap",
                    "-password": "wap",
                    "-mmsc": "http://203.162.21.114/mmsc",
                    "-mmsproxy": "203.162.21.114",
                    "-mmsport": "8000",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobifone",
                    "-mcc": "452",
                    "-mnc": "01",
                    "-apn": "m-wap",
                    "-user": "mms",
                    "-password": "mms",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vinaphone MMS",
                    "-mcc": "452",
                    "-mnc": "02",
                    "-apn": "m3-mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.vinaphone.vnn.vn:8002",
                    "-mmsproxy": "10.1.10.46",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vinaphone",
                    "-mcc": "452",
                    "-mnc": "02",
                    "-apn": "m3-world",
                    "-user": "mms",
                    "-password": "mms",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Viettel",
                    "-mcc": "452",
                    "-mnc": "04",
                    "-apn": "v-internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Viettel MMS",
                    "-mcc": "452",
                    "-mnc": "04",
                    "-apn": "v-mms",
                    "-mmsc": "http://mms.viettelmobile.com.vn/mms",
                    "-mmsproxy": "192.168.233.10",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "BeeLine VN",
                    "-mcc": "452",
                    "-mnc": "07",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VIETNAMOBILE MMS",
                    "-mcc": "452",
                    "-mnc": "5",
                    "-apn": "mms",
                    "-mmsc": "http://10.10.128.58/servlets/mms",
                    "-mmsproxy": "10.10.128.44",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "VIETNAMOBILE",
                    "-mcc": "452",
                    "-mnc": "5",
                    "-apn": "wap",
                    "-proxy": "10.10.128.44",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Beeline VN MMS",
                    "-mcc": "452",
                    "-mnc": "7",
                    "-apn": "MMS",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "10.16.70.199",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "CSL",
                    "-mcc": "454",
                    "-mnc": "00",
                    "-apn": "hkcsl",
                    "-proxy": "192.168.59.51",
                    "-port": "8080",
                    "-mmsc": "http://192.168.58.171:8002/",
                    "-mmsproxy": "192.168.59.51",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "CSL GPRS",
                    "-mcc": "454",
                    "-mnc": "00",
                    "-apn": "hkcsl",
                    "-proxy": "192.168.59.51",
                    "-port": "8080",
                    "-mmsc": "http://192.168.58.171:8002",
                    "-mmsproxy": "192.168.59.51",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "one2free (mobile)",
                    "-mcc": "454",
                    "-mnc": "00",
                    "-apn": "mobile",
                    "-mmsc": "http://192.168.58.171:8002",
                    "-mmsproxy": "192.168.59.51",
                    "-mmsport": "8080",
                    "-type": "default,mms,hipri"
                },
                {
                    "-carrier": "one2free tethering",
                    "-mcc": "454",
                    "-mnc": "00",
                    "-apn": "lte.internet",
                    "-type": "dun"
                },
                {
                    "-carrier": "CSL",
                    "-mcc": "454",
                    "-mnc": "02",
                    "-apn": "hkcsl",
                    "-proxy": "192.168.59.51",
                    "-port": "8080",
                    "-mmsc": "http://192.168.58.171:8002/",
                    "-mmsproxy": "192.168.59.51",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "CSL GPRS",
                    "-mcc": "454",
                    "-mnc": "02",
                    "-apn": "hkcsl",
                    "-proxy": "192.168.59.51",
                    "-port": "8080",
                    "-mmsc": "http://192.168.58.171:8002",
                    "-mmsproxy": "192.168.59.51",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "3 HK LTE",
                    "-mcc": "454",
                    "-mnc": "03",
                    "-apn": "mobile.lte.three.com.hk",
                    "-user": "*",
                    "-password": "*",
                    "-server": "*",
                    "-mmsc": "http://mms.um.three.com.hk:10021/mmsc",
                    "-mmsproxy": "172.20.97.116",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "3 HK",
                    "-mcc": "454",
                    "-mnc": "03",
                    "-apn": "mobile.three.com.hk",
                    "-user": "*",
                    "-password": "*",
                    "-server": "*",
                    "-mmsc": "http://mms.um.three.com.hk:10021/mmsc",
                    "-mmsproxy": "172.20.97.116",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "3 (2G) MMS",
                    "-mcc": "454",
                    "-mnc": "04",
                    "-apn": "mms-g.three.com.hk",
                    "-mmsc": "http://10.30.15.51:10021/mmsc",
                    "-mmsproxy": "10.30.15.53",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "3 (2G)",
                    "-mcc": "454",
                    "-mnc": "04",
                    "-apn": "web-g.three.com.hk",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "�й�����NET����",
                    "-mcc": "454",
                    "-mnc": "04",
                    "-apn": "ctnet",
                    "-user": "ctnet@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "�й�����WAP����",
                    "-mcc": "454",
                    "-mnc": "04",
                    "-apn": "ctwap",
                    "-user": "ctwap@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-proxy": "10.0.0.200",
                    "-port": "80",
                    "-mmsproxy": "10.0.0.200",
                    "-mmsport": "80",
                    "-mmsc": "http://mmsc.vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun,mms",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "Smartone",
                    "-mcc": "454",
                    "-mnc": "06",
                    "-apn": "Smartone",
                    "-mmsc": "http://mms.smartone-vodafone.com/server",
                    "-mmsproxy": "10.9.9.9",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Smartone",
                    "-mcc": "454",
                    "-mnc": "06",
                    "-apn": "Smartone",
                    "-mmsc": "http://mms.smartone-vodafone.com/server",
                    "-mmsproxy": "10.9.9.9",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "CSL Data",
                    "-mcc": "454",
                    "-mnc": "10",
                    "-apn": "hkcsl",
                    "-proxy": "192.168.59.51",
                    "-port": "8080",
                    "-mmsc": "http://192.168.58.171:8002/",
                    "-mmsproxy": "192.168.59.51",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "one2free 2G",
                    "-mcc": "454",
                    "-mnc": "10",
                    "-apn": "hkcsl",
                    "-mmsc": "http://192.168.58.171:8002",
                    "-mmsproxy": "192.168.59.51",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "CMHK Data",
                    "-mcc": "454",
                    "-mnc": "12",
                    "-apn": "CMHK",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "CMHK MMS",
                    "-mcc": "454",
                    "-mnc": "12",
                    "-apn": "CMHK",
                    "-mmsc": "http://mms.hk.chinamobile.com/mms",
                    "-mmsproxy": "172.31.31.36",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "CMHK Peoples MMS",
                    "-mcc": "454",
                    "-mnc": "12",
                    "-apn": "peoples.mms",
                    "-mmsc": "http://mms.peoples.com.hk/mms",
                    "-mmsproxy": "172.31.31.36",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "PEOPLES MMS",
                    "-mcc": "454",
                    "-mnc": "12",
                    "-apn": "170170",
                    "-mmsc": "http://mms.peoples.com.hk/mms",
                    "-mmsproxy": "172.31.31.36",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "PEOPLES",
                    "-mcc": "454",
                    "-mnc": "12",
                    "-apn": "peoples.net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SMC-Voda",
                    "-mcc": "454",
                    "-mnc": "15",
                    "-apn": "SmarTone-Vodafone",
                    "-mmsc": "http://mms.smartone-vodafone.com/server",
                    "-mmsproxy": "10.9.9.9",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "PCCW 2G",
                    "-mcc": "454",
                    "-mnc": "16",
                    "-apn": "pccwdata",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "PCCW 2G MMS",
                    "-mcc": "454",
                    "-mnc": "16",
                    "-apn": "pccwmms",
                    "-mmsc": "http://mmsc.mms.pccwmobile.com:8002/",
                    "-mmsproxy": "10.131.2.8",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Smartone",
                    "-mcc": "454",
                    "-mnc": "17",
                    "-apn": "Smartone",
                    "-mmsc": "http://mms.smartone-vodafone.com/server",
                    "-mmsproxy": "10.9.9.9",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "CSL",
                    "-mcc": "454",
                    "-mnc": "18",
                    "-apn": "hkcsl",
                    "-proxy": "192.168.59.51",
                    "-port": "8080",
                    "-mmsc": "http://192.168.58.171:8002/",
                    "-mmsproxy": "192.168.59.51",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "PCCW",
                    "-mcc": "454",
                    "-mnc": "19",
                    "-apn": "pccw",
                    "-mmsc": "http://3gmms.pccwmobile.com:8080/was",
                    "-mmsproxy": "10.140.14.10",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "PCCW 3G",
                    "-mcc": "454",
                    "-mnc": "19",
                    "-apn": "pccw",
                    "-mmsc": "http://3gmms.pccwmobile.com:8080/was",
                    "-mmsproxy": "10.140.14.10",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "SmarTone Macau",
                    "-mcc": "455",
                    "-mnc": "00",
                    "-apn": "smartgprs",
                    "-proxy": "10.9.9.29",
                    "-port": "8080",
                    "-mmsc": "http://mms.smartone.com.mo/dmog/mo",
                    "-mmsproxy": "10.9.9.29",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "SmarTone MMS",
                    "-mcc": "455",
                    "-mnc": "00",
                    "-apn": "smartgprs",
                    "-mmsc": "http://mms.smartone.com.mo/dmog/mo",
                    "-mmsproxy": "10.9.9.29",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "SmarTone",
                    "-mcc": "455",
                    "-mnc": "00",
                    "-apn": "smartweb",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "CTM",
                    "-mcc": "455",
                    "-mnc": "01",
                    "-apn": "ctm-mobile",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "CTM MMS",
                    "-mcc": "455",
                    "-mnc": "01",
                    "-apn": "ctmmms",
                    "-mmsc": "http://mms.wap.ctm.net:8002",
                    "-mmsproxy": "192.168.99.3",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "�й�����NET����",
                    "-mcc": "455",
                    "-mnc": "02",
                    "-apn": "ctnet",
                    "-user": "ctnet@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "�й�����WAP����",
                    "-mcc": "455",
                    "-mnc": "02",
                    "-apn": "ctwap",
                    "-user": "ctwap@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-proxy": "10.0.0.200",
                    "-port": "80",
                    "-mmsproxy": "10.0.0.200",
                    "-mmsport": "80",
                    "-mmsc": "http://mmsc.vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun,mms",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "Hutchison Macau MMS",
                    "-mcc": "455",
                    "-mnc": "03",
                    "-apn": "mms.hutchisonmacau.com",
                    "-mmsc": "http://10.30.15.51:10021/mmsc",
                    "-mmsproxy": "10.30.15.53",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Hutchison Macau",
                    "-mcc": "455",
                    "-mnc": "03",
                    "-apn": "web-g.three.com.hk",
                    "-user": "hutchison",
                    "-password": "1234",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "CTM",
                    "-mcc": "455",
                    "-mnc": "04",
                    "-apn": "ctm-mobile",
                    "-proxy": "192.168.99.2",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "CTM MMS",
                    "-mcc": "455",
                    "-mnc": "04",
                    "-apn": "ctmmms",
                    "-mmsc": "http://mms.wap.ctm.net:8002",
                    "-mmsproxy": "192.168.99.3",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobitel KH",
                    "-mcc": "456",
                    "-mnc": "01",
                    "-apn": "postpaid",
                    "-user": "mobitel",
                    "-password": "mobitel",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "China Mobile",
                    "-mcc": "460",
                    "-mnc": "00",
                    "-apn": "cmnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "China Mobile MMS",
                    "-mcc": "460",
                    "-mnc": "00",
                    "-apn": "cmwap",
                    "-proxy": "10.0.0.172",
                    "-port": "80",
                    "-mmsc": "http://mmsc.monternet.com",
                    "-mmsproxy": "10.0.0.172",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "China Unicom 3G",
                    "-mcc": "460",
                    "-mnc": "01",
                    "-apn": "3gnet",
                    "-port": "80",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "�й���ͨ 3g ���� (China Unicom)",
                    "-mcc": "460",
                    "-mnc": "01",
                    "-apn": "3gwap",
                    "-mmsc": "http://mmsc.myuni.com.cn",
                    "-mmsproxy": "10.0.0.172",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "China Unicom MMS",
                    "-mcc": "460",
                    "-mnc": "01",
                    "-apn": "uniwap",
                    "-mmsc": "http://mmsc.myuni.com.cn",
                    "-mmsproxy": "10.0.0.172",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "China Mobile",
                    "-mcc": "460",
                    "-mnc": "02",
                    "-apn": "cmnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "China Mobile MMS",
                    "-mcc": "460",
                    "-mnc": "02",
                    "-apn": "cmwap",
                    "-proxy": "10.0.0.172",
                    "-port": "80",
                    "-mmsc": "http://mmsc.monternet.com",
                    "-mmsproxy": "10.0.0.172",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "�й�����NET����",
                    "-mcc": "460",
                    "-mnc": "03",
                    "-apn": "ctnet",
                    "-user": "ctnet@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "�й�����WAP����",
                    "-mcc": "460",
                    "-mnc": "03",
                    "-apn": "ctwap",
                    "-user": "ctwap@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-proxy": "10.0.0.200",
                    "-port": "80",
                    "-mmsproxy": "10.0.0.200",
                    "-mmsport": "80",
                    "-mmsc": "http://mmsc.vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun,mms",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "�й��ƶ� (China Mobile) GPRS",
                    "-mcc": "460",
                    "-mnc": "07",
                    "-apn": "cmnet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "�й��ƶ����� (China Mobile)",
                    "-mcc": "460",
                    "-mnc": "07",
                    "-apn": "cmwap",
                    "-proxy": "10.0.0.172",
                    "-port": "80",
                    "-mmsc": "http://mmsc.monternet.com",
                    "-mmsproxy": "10.0.0.172",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "�й�����NET����",
                    "-mcc": "460",
                    "-mnc": "11",
                    "-apn": "ctnet",
                    "-user": "ctnet@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "�й�����NET����",
                    "-mcc": "460",
                    "-mnc": "12",
                    "-apn": "ctnet",
                    "-user": "ctnet@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "�й�����WAP����",
                    "-mcc": "460",
                    "-mnc": "12",
                    "-apn": "ctwap",
                    "-user": "ctwap@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-proxy": "10.0.0.200",
                    "-port": "80",
                    "-mmsproxy": "10.0.0.200",
                    "-mmsport": "80",
                    "-mmsc": "http://mmsc.vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun,mms",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "�й�����NET����",
                    "-mcc": "460",
                    "-mnc": "13",
                    "-apn": "ctnet",
                    "-user": "ctnet@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "�й�����WAP����",
                    "-mcc": "460",
                    "-mnc": "13",
                    "-apn": "ctwap",
                    "-user": "ctwap@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-proxy": "10.0.0.200",
                    "-port": "80",
                    "-mmsproxy": "10.0.0.200",
                    "-mmsport": "80",
                    "-mmsc": "http://mmsc.vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun,mms",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "�й�����NET����",
                    "-mcc": "460",
                    "-mnc": "99",
                    "-apn": "ctnet",
                    "-user": "ctnet@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "�й�����WAP����",
                    "-mcc": "460",
                    "-mnc": "99",
                    "-apn": "ctwap",
                    "-user": "ctwap@mycdma.cn",
                    "-password": "vnet.mobi",
                    "-proxy": "10.0.0.200",
                    "-port": "80",
                    "-mmsproxy": "10.0.0.200",
                    "-mmsport": "80",
                    "-mmsc": "http://mmsc.vnet.mobi",
                    "-authtype": "3",
                    "-type": "default,supl,dun,mms",
                    "-spn": "�й�����"
                },
                {
                    "-carrier": "FarEasTone",
                    "-mcc": "466",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "�h�����(Far EasTone) (Fetnet01)",
                    "-mcc": "466",
                    "-mnc": "01",
                    "-apn": "fetnet01",
                    "-proxy": "210.241.199.199",
                    "-port": "80",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "FarEasTone MMS",
                    "-mcc": "466",
                    "-mnc": "01",
                    "-apn": "fetnet01",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "210.241.199.199",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "KGT",
                    "-mcc": "466",
                    "-mnc": "88",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "KGT MMS",
                    "-mcc": "466",
                    "-mnc": "88",
                    "-apn": "kgtmms",
                    "-mmsc": "http://mms.kgtmms.net.tw/mms/wapenc",
                    "-mmsproxy": "172.28.33.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "�����(AURORA) (MMS)",
                    "-mcc": "466",
                    "-mnc": "89",
                    "-apn": "aurorawap",
                    "-mmsc": "http://auroramms",
                    "-mmsproxy": "172.24.128.36",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "�����(AURORA) (Internet)",
                    "-mcc": "466",
                    "-mnc": "89",
                    "-apn": "auroraweb",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vibo",
                    "-mcc": "466",
                    "-mnc": "89",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "�������(VIBO)",
                    "-mcc": "466",
                    "-mnc": "89",
                    "-apn": "vibo",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "172.24.128.36",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Vibo",
                    "-mcc": "466",
                    "-mnc": "89",
                    "-apn": "vibo",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "172.24.128.36",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "���A���(Chunghwa)",
                    "-mcc": "466",
                    "-mnc": "92",
                    "-apn": "emome",
                    "-mmsc": "http://mms.emome.net:8002",
                    "-mmsproxy": "10.1.1.1",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "CHT MMS",
                    "-mcc": "466",
                    "-mnc": "92",
                    "-apn": "emome",
                    "-mmsc": "http://mms.emome.net:8002",
                    "-mmsproxy": "10.1.1.1",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "CHT",
                    "-mcc": "466",
                    "-mnc": "92",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Mobitai MMS",
                    "-mcc": "466",
                    "-mnc": "93",
                    "-apn": "gprs1",
                    "-user": "gprs",
                    "-password": "gprs",
                    "-mmsc": "http://mms.mobeelife.net/mms/wapenc",
                    "-mmsproxy": "192.168.77.5",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobitai",
                    "-mcc": "466",
                    "-mnc": "93",
                    "-apn": "internet",
                    "-user": "gprs",
                    "-password": "gprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "̨������(TW Mobile) (MMS)",
                    "-mcc": "466",
                    "-mnc": "93",
                    "-apn": "mms",
                    "-mmsc": "http://mms.catch.net.tw",
                    "-mmsproxy": "10.1.1.2",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "̨������(TW Mobile) (twm)",
                    "-mcc": "466",
                    "-mnc": "93",
                    "-apn": "twm",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Taiwan Mobile Internet",
                    "-mcc": "466",
                    "-mnc": "97",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Taiwan Mobile MMS",
                    "-mcc": "466",
                    "-mnc": "97",
                    "-apn": "mms",
                    "-mmsc": "http://mms.catch.net.tw",
                    "-mmsproxy": "10.1.1.2",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Taiwan Mobile",
                    "-mcc": "466",
                    "-mnc": "97",
                    "-apn": "twm",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TransAsia",
                    "-mcc": "466",
                    "-mnc": "99",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TransAsia MMS",
                    "-mcc": "466",
                    "-mnc": "99",
                    "-apn": "mms",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "10.1.1.2",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "̨������(TW Mobile) (twm)",
                    "-mcc": "466",
                    "-mnc": "99",
                    "-apn": "twm",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Grameenphone",
                    "-mcc": "470",
                    "-mnc": "01",
                    "-apn": "gpinterneth",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Robi MMS",
                    "-mcc": "470",
                    "-mnc": "02",
                    "-apn": "WAP",
                    "-mmsc": "http://192.168.23.4/was",
                    "-mmsproxy": "192.168.023.007",
                    "-mmsport": "9028",
                    "-type": "mms"
                },
                {
                    "-carrier": "Robi",
                    "-mcc": "470",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-port": "9201",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Banglalink MMS",
                    "-mcc": "470",
                    "-mnc": "03",
                    "-apn": "blmms",
                    "-mmsc": "http://",
                    "-mmsproxy": "10.10.55.34",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Banglalink",
                    "-mcc": "470",
                    "-mnc": "03",
                    "-apn": "blweb",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Warid BD",
                    "-mcc": "470",
                    "-mnc": "07",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Warid BD MMS",
                    "-mcc": "470",
                    "-mnc": "07",
                    "-apn": "mms",
                    "-mmsc": "http://mms.waridtel.com.bd/index.jsp",
                    "-mmsproxy": "10.128.5.6",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Maxis 2G Internet",
                    "-mcc": "502",
                    "-mnc": "12",
                    "-apn": "net",
                    "-user": "maxis",
                    "-password": "wap",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Maxis 2G MMS",
                    "-mcc": "502",
                    "-mnc": "12",
                    "-apn": "net",
                    "-user": "maxis",
                    "-password": "wap",
                    "-server": "202.75.133.49",
                    "-mmsc": "http://172.16.74.100:10021/mmsc",
                    "-mmsproxy": "202.75.133.49",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Maxis 3G Internet",
                    "-mcc": "502",
                    "-mnc": "12",
                    "-apn": "unet",
                    "-user": "maxis",
                    "-password": "wap",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Maxis 3G MMS",
                    "-mcc": "502",
                    "-mnc": "12",
                    "-apn": "unet",
                    "-user": "maxis",
                    "-password": "wap",
                    "-server": "202.75.133.49",
                    "-mmsc": "http://172.16.74.100:10021/mmsc",
                    "-mmsproxy": "202.75.133.49",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Xpax",
                    "-mcc": "502",
                    "-mnc": "13",
                    "-apn": "celcom",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Xpax MMS",
                    "-mcc": "502",
                    "-mnc": "13",
                    "-apn": "celcom3g",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsx": "http://mms.celcom.net.my",
                    "-mmsproxy": "10.128.1.242",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Digi MMS",
                    "-mcc": "502",
                    "-mnc": "16",
                    "-apn": "digimms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.digi.com.my/servlets/mms",
                    "-mmsproxy": "203.92.128.160",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Digi",
                    "-mcc": "502",
                    "-mnc": "16",
                    "-apn": "diginet",
                    "-user": "digi",
                    "-password": "digi",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "U Mobile Internet",
                    "-mcc": "502",
                    "-mnc": "18",
                    "-apn": "my3g",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "U Mobile MMS",
                    "-mcc": "502",
                    "-mnc": "18",
                    "-apn": "my3g",
                    "-mmsc": "http://10.30.3.11/servlets/mms",
                    "-mmsproxy": "10.30.5.11",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Celcom 3G Internet",
                    "-mcc": "502",
                    "-mnc": "19",
                    "-apn": "celcom3g",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Celcom 3G MMS",
                    "-mcc": "502",
                    "-mnc": "19",
                    "-apn": "celcom3g",
                    "-mmsc": "http://mms.celcom.net.my",
                    "-mmsproxy": "10.128.1.242",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Celcom 2G Internet",
                    "-mcc": "502",
                    "-mnc": "19",
                    "-apn": "celcom.net.my",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Celcom 2G MMS",
                    "-mcc": "502",
                    "-mnc": "19",
                    "-apn": "mms.celcom.net.my",
                    "-mmsc": "http://mms.celcom.net.my",
                    "-mmsproxy": "10.128.1.242",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telstra MMS",
                    "-mcc": "505",
                    "-mnc": "01",
                    "-apn": "Telstra.mms",
                    "-mmsc": "http://mmsc.telstra.com:8002",
                    "-mmsproxy": "10.1.1.180",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telstra Internet",
                    "-mcc": "505",
                    "-mnc": "01",
                    "-apn": "Telstra.wap",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telstra w/ Portal",
                    "-mcc": "505",
                    "-mnc": "01",
                    "-apn": "telstra.internet",
                    "-proxy": "10.1.1.181",
                    "-port": "80",
                    "-mmsc": "http://mmsc.telstra.com:8002",
                    "-mmsproxy": "10.1.1.181",
                    "-mmsport": "80",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Telstra 3G Pay by Time",
                    "-mcc": "505",
                    "-mnc": "01",
                    "-apn": "telstra.pcpack",
                    "-password": "telstra",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Exetel",
                    "-mcc": "505",
                    "-mnc": "02",
                    "-apn": "exetel1",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Optus",
                    "-mcc": "505",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Optus MMS",
                    "-mcc": "505",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-user": "*",
                    "-password": "*",
                    "-server": "*",
                    "-proxy": "202.139.83.152",
                    "-port": "8070",
                    "-mmsc": "http://mmsc.optus.com.au:8002/",
                    "-mmsproxy": "61.88.190.10",
                    "-mmsport": "8070",
                    "-type": "mms"
                },
                {
                    "-carrier": "Virgin AU",
                    "-mcc": "505",
                    "-mnc": "02",
                    "-apn": "virgininternet",
                    "-user": "*",
                    "-password": "*",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Virgin AU MMS",
                    "-mcc": "505",
                    "-mnc": "02",
                    "-apn": "virginmms",
                    "-user": "*",
                    "-password": "*",
                    "-server": "*",
                    "-proxy": "202.139.083.152",
                    "-port": "8070",
                    "-mmsc": "http://mms.virginvibe.com.au:8002/",
                    "-mmsproxy": "202.139.083.152",
                    "-mmsport": "8070",
                    "-type": "mms"
                },
                {
                    "-carrier": "Optus Internet",
                    "-mcc": "505",
                    "-mnc": "02",
                    "-apn": "yesinternet",
                    "-user": "*",
                    "-password": "*",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Apex Telecom",
                    "-mcc": "505",
                    "-mnc": "02",
                    "-apn": "splns357",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Boost MMS",
                    "-mcc": "505",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-proxy": "61.88.190.10",
                    "-port": "8070",
                    "-mmsc": "http://mmsc.optus.com.au:8002/",
                    "-mmsproxy": "61.88.190.10",
                    "-mmsport": "8070",
                    "-type": "mms",
                    "-authtype": "3"
                },
                {
                    "-carrier": "Boost Mobile",
                    "-mcc": "505",
                    "-mnc": "02",
                    "-apn": "yesinternet",
                    "-type": "default,supl",
                    "-authtype": "3"
                },
                {
                    "-carrier": "Vodafone AU-MMS",
                    "-mcc": "505",
                    "-mnc": "03",
                    "-apn": "live.vodafone.com",
                    "-user": "*",
                    "-password": "*",
                    "-server": "*",
                    "-mmsc": "http://pxt.vodafone.net.au/pxtsend",
                    "-mmsproxy": "10.202.2.60",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone AU",
                    "-mcc": "505",
                    "-mnc": "03",
                    "-apn": "vfinternet.au",
                    "-user": "*",
                    "-password": "*",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "3 AU",
                    "-mcc": "505",
                    "-mnc": "06",
                    "-apn": "3services",
                    "-mmsc": "http://mmsc.three.net.au:10021/mmsc",
                    "-mmsproxy": "10.176.57.25",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "VF AU PXT",
                    "-mcc": "505",
                    "-mnc": "07",
                    "-apn": "live.vodafone.com",
                    "-mmsc": "http://pxt.vodafone.net.au/pxtsend",
                    "-mmsproxy": "10.202.2.60",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "VF Internet",
                    "-mcc": "505",
                    "-mnc": "07",
                    "-apn": "vfinternet.au",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telstra MMS",
                    "-mcc": "505",
                    "-mnc": "11",
                    "-apn": "Telstra.mms",
                    "-mmsc": "http://mmsc.telstra.com:8002",
                    "-mmsproxy": "10.1.1.180",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telstra Internet",
                    "-mcc": "505",
                    "-mnc": "11",
                    "-apn": "Telstra.wap",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "3Internet",
                    "-mcc": "505",
                    "-mnc": "12",
                    "-apn": "3netaccess",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "3",
                    "-mcc": "505",
                    "-mnc": "12",
                    "-apn": "3services",
                    "-mmsc": "http://mmsc.three.net.au:10021/mmsc",
                    "-mmsproxy": "10.176.57.25",
                    "-mmsport": "8799",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Telstra MMS",
                    "-mcc": "505",
                    "-mnc": "71",
                    "-apn": "Telstra.mms",
                    "-mmsc": "http://mmsc.telstra.com:8002",
                    "-mmsproxy": "10.1.1.180",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telstra Internet",
                    "-mcc": "505",
                    "-mnc": "71",
                    "-apn": "Telstra.wap",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telstra MMS",
                    "-mcc": "505",
                    "-mnc": "72",
                    "-apn": "Telstra.mms",
                    "-mmsc": "http://mmsc.telstra.com:8002",
                    "-mmsproxy": "10.1.1.180",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telstra Internet",
                    "-mcc": "505",
                    "-mnc": "72",
                    "-apn": "Telstra.wap",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VF AU PXT",
                    "-mcc": "505",
                    "-mnc": "88",
                    "-apn": "live.vodafone.com",
                    "-mmsc": "http://pxt.vodafone.net.au/pxtsend",
                    "-mmsproxy": "10.202.2.60",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "VF Internet",
                    "-mcc": "505",
                    "-mnc": "88",
                    "-apn": "vfinternet.au",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Optus Internet",
                    "-mcc": "505",
                    "-mnc": "90",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Optus MMS",
                    "-mcc": "505",
                    "-mnc": "90",
                    "-apn": "mms",
                    "-mmsc": "http://mmsc.optus.com.au:8002/",
                    "-mmsproxy": "61.88.190.10",
                    "-mmsport": "8070",
                    "-type": "mms"
                },
                {
                    "-carrier": "Indosat",
                    "-mcc": "510",
                    "-mnc": "01",
                    "-apn": "indosat3g",
                    "-user": "indosat",
                    "-password": "indosat",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Indosat GPRS",
                    "-mcc": "510",
                    "-mnc": "01",
                    "-apn": "indosatgprs",
                    "-user": "indosat",
                    "-password": "indosat",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Indosat MMS",
                    "-mcc": "510",
                    "-mnc": "01",
                    "-apn": "indosatmms",
                    "-user": "indosat",
                    "-password": "indosat",
                    "-mmsc": "http://mmsc.indosat.com",
                    "-mmsproxy": "10.19.19.19",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "AXIS",
                    "-mcc": "510",
                    "-mnc": "8",
                    "-apn": "AXIS",
                    "-user": "axis",
                    "-password": "123456",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "AXIS MMS",
                    "-mcc": "510",
                    "-mnc": "8",
                    "-apn": "AXISmms",
                    "-user": "axis",
                    "-password": "123456",
                    "-mmsc": "http://mmsc.AXIS",
                    "-mmsproxy": "10.8.3.8",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telkomsel",
                    "-mcc": "510",
                    "-mnc": "10",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telkomsel MMS",
                    "-mcc": "510",
                    "-mnc": "10",
                    "-apn": "mms",
                    "-user": "wap",
                    "-password": "wap123",
                    "-mmsc": "http://mms.telkomsel.com",
                    "-mmsproxy": "10.1.89.150",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "XL-INTERNET",
                    "-mcc": "510",
                    "-mnc": "11",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "XL-MMS",
                    "-mcc": "510",
                    "-mnc": "11",
                    "-apn": "www.xlmms.net",
                    "-user": "xlgprs",
                    "-password": "proxl",
                    "-mmsc": "http://mmc.xl.net.id/servlets/mms",
                    "-mmsproxy": "202.152.240.50",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IM3 MMS",
                    "-mcc": "510",
                    "-mnc": "21",
                    "-apn": "indosatmms",
                    "-user": "indosat",
                    "-password": "indosat",
                    "-mmsc": "http://mmsc.indosat.com",
                    "-mmsproxy": "10.19.19.19",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "IM3 Internet",
                    "-mcc": "510",
                    "-mnc": "21",
                    "-apn": "www.indosat-m3.net",
                    "-user": "gprs",
                    "-password": "im3",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "3 ID",
                    "-mcc": "510",
                    "-mnc": "89",
                    "-apn": "3gprs",
                    "-user": "3gprs",
                    "-password": "3gprs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "3 ID INTERNET",
                    "-mcc": "510",
                    "-mnc": "89",
                    "-apn": "3data",
                    "-user": "3data",
                    "-password": "3data",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "3 ID MMS",
                    "-mcc": "510",
                    "-mnc": "89",
                    "-apn": "3mms",
                    "-user": "3mms",
                    "-password": "3mms",
                    "-mmsc": "http://mmsthree.co.id",
                    "-mmsproxy": "10.4.0.10",
                    "-mmsport": "3128",
                    "-type": "mms"
                },
                {
                    "-carrier": "GLOBE",
                    "-mcc": "515",
                    "-mnc": "02",
                    "-apn": "internet.globe.com.ph",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "GLOBE MMS",
                    "-mcc": "515",
                    "-mnc": "02",
                    "-apn": "real.globe.com.ph",
                    "-user": "globe",
                    "-password": "globe",
                    "-mmsc": "http://192.40.100.22:10021/mmsc",
                    "-mmsproxy": "192.40.100.20",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SMART",
                    "-mcc": "515",
                    "-mnc": "03",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SMART MMS",
                    "-mcc": "515",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-mmsc": "http://10.102.61.238:8002",
                    "-mmsproxy": "10.102.61.46",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SUN",
                    "-mcc": "515",
                    "-mnc": "05",
                    "-apn": "minternet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SUN MMS",
                    "-mcc": "515",
                    "-mnc": "05",
                    "-apn": "mms",
                    "-mmsc": "http://mmscenter.suncellular.com.ph",
                    "-mmsproxy": "202.138.159.78",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "TrueMove-H",
                    "-mcc": "520",
                    "-mnc": "00",
                    "-apn": "internet",
                    "-user": "true",
                    "-password": "true",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TrueMove-H MMS",
                    "-mcc": "520",
                    "-mnc": "00",
                    "-apn": "hmms",
                    "-user": "true",
                    "-password": "true",
                    "-mmsc": "http://mms.trueh.com:8002",
                    "-mmsproxy": "10.4.7.39",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "AIS GPRS Internet",
                    "-mcc": "520",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "AIS MMS",
                    "-mcc": "520",
                    "-mnc": "01",
                    "-apn": "multimedia",
                    "-mmsc": "http://mms.mobilelife.co.th",
                    "-mmsproxy": "203.170.229.34",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "AIS Internet",
                    "-mcc": "520",
                    "-mnc": "03",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "AIS MMS",
                    "-mcc": "520",
                    "-mnc": "03",
                    "-apn": "mms",
                    "-mmsc": "http://mms.ais.co.th",
                    "-mmsproxy": "203.170.229.34",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "DTAC MMS",
                    "-mcc": "520",
                    "-mnc": "05",
                    "-apn": "mms",
                    "-mmsc": "http://mms2.dtac.co.th:8002",
                    "-mmsproxy": "10.10.10.10",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "DTAC GPRS WEB",
                    "-mcc": "520",
                    "-mnc": "05",
                    "-apn": "www.dtac.co.th",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TOT 3G",
                    "-mcc": "520",
                    "-mnc": "15",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TOT 3G MMS",
                    "-mcc": "520",
                    "-mnc": "15",
                    "-apn": "mms",
                    "-mmsc": "http://mms.tot3g.net:8002",
                    "-mmsproxy": "10.218.24.83",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "DTAC MMS",
                    "-mcc": "520",
                    "-mnc": "18",
                    "-apn": "mms",
                    "-mmsc": "http://mms.dtac.co.th:8002",
                    "-mmsproxy": "203.155.200.133",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "DTAC GPRS WEB",
                    "-mcc": "520",
                    "-mnc": "18",
                    "-apn": "www.dtac.co.th",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "True",
                    "-mcc": "520",
                    "-mnc": "99",
                    "-apn": "internet",
                    "-user": "true",
                    "-password": "true",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "True MMS",
                    "-mcc": "520",
                    "-mnc": "99",
                    "-apn": "mms",
                    "-user": "true",
                    "-password": "true",
                    "-mmsc": "http://mms.trueworld.net:8002",
                    "-mmsproxy": "10.4.7.39",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SingTel",
                    "-mcc": "525",
                    "-mnc": "01",
                    "-apn": "e-ideas",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IDEAS",
                    "-mcc": "525",
                    "-mnc": "01",
                    "-apn": "e-ideas",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "IDEAS MMS",
                    "-mcc": "525",
                    "-mnc": "01",
                    "-apn": "e-ideas",
                    "-user": "65IDEAS",
                    "-password": "65ideas",
                    "-mmsc": "http://mms.singtel.com:10021/mmsc",
                    "-mmsproxy": "165.21.42.84",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SingTel",
                    "-mcc": "525",
                    "-mnc": "02",
                    "-apn": "e-ideas",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SingTel MMS",
                    "-mcc": "525",
                    "-mnc": "02",
                    "-apn": "e-ideas",
                    "-user": "65IDEAS",
                    "-password": "65ideas",
                    "-mmsc": "http://mms.singtel.com:10021/mmsc",
                    "-mmsproxy": "165.21.42.84",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "M1 MMS",
                    "-mcc": "525",
                    "-mnc": "03",
                    "-apn": "Miworld",
                    "-proxy": "172.16.1.23",
                    "-port": "9201",
                    "-mmsc": "http://mmsgw:8002",
                    "-mmsproxy": "172.16.14.10",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "MiWorld WAP (GPRS)",
                    "-mcc": "525",
                    "-mnc": "03",
                    "-apn": "miworld",
                    "-user": "65",
                    "-password": "user123",
                    "-proxy": "172.16.1.23",
                    "-port": "8081",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "M1 MMS",
                    "-mcc": "525",
                    "-mnc": "03",
                    "-apn": "miworld",
                    "-user": "65",
                    "-password": "user123",
                    "-mmsc": "http://mmsgw:8002",
                    "-mmsproxy": "172.16.14.10",
                    "-mmsport": "8080",
                    "-authenticationtype": "PAP",
                    "-type": "mms"
                },
                {
                    "-carrier": "M1",
                    "-mcc": "525",
                    "-mnc": "03",
                    "-apn": "sunsurf",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Sunsurf Internet",
                    "-mcc": "525",
                    "-mnc": "03",
                    "-apn": "sunsurf",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "StarHub",
                    "-mcc": "525",
                    "-mnc": "05",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Gee! MMS",
                    "-mcc": "525",
                    "-mnc": "05",
                    "-apn": "shmms",
                    "-mmsc": "http://mms.starhubgee.com.sg:8002/",
                    "-mmsproxy": "10.12.1.80",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Gee! (GPRS)",
                    "-mcc": "525",
                    "-mnc": "05",
                    "-apn": "shwap",
                    "-user": "star",
                    "-password": "hub",
                    "-proxy": "10.12.1.2",
                    "-port": "80",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "StarHub",
                    "-mcc": "525",
                    "-mnc": "05",
                    "-apn": "shwapint",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "B-Mobile MMS",
                    "-mcc": "528",
                    "-mnc": "02",
                    "-apn": "bmobilemms",
                    "-mmsc": "http://mms.bmobile.com.bn/was",
                    "-mmsproxy": "129.9.10.20",
                    "-mmsport": "6500",
                    "-type": "mms"
                },
                {
                    "-carrier": "B-Mobile",
                    "-mcc": "528",
                    "-mnc": "02",
                    "-apn": "bmobilewap",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "DSTCom",
                    "-mcc": "528",
                    "-mnc": "11",
                    "-apn": "dst.internet",
                    "-user": "internet",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "DSTCom MMS",
                    "-mcc": "528",
                    "-mnc": "11",
                    "-apn": "dst.mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.dst.com.bn/mmsc",
                    "-mmsproxy": "10.100.6.101",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone NZ MMS",
                    "-mcc": "530",
                    "-mnc": "01",
                    "-apn": "live.vodafone.com",
                    "-mmsc": "http://pxt.vodafone.net.nz/pxtsend",
                    "-mmsproxy": "172.030.038.003",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone NZ",
                    "-mcc": "530",
                    "-mnc": "01",
                    "-apn": "www.vodafone.net.nz",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telecom NZ",
                    "-mcc": "530",
                    "-mnc": "02",
                    "-apn": "internet.telecom.co.nz",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VFNZ PXT",
                    "-mcc": "530",
                    "-mnc": "02",
                    "-apn": "live.vodafone.com",
                    "-mmsc": "http://pxt.vodafone.net.nz/pxtsend",
                    "-mmsproxy": "172.30.38.3",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telecom NZ MMS",
                    "-mcc": "530",
                    "-mnc": "02",
                    "-apn": "wap.telecom.co.nz",
                    "-mmsc": "http://lsmmsc.xtra.co.nz",
                    "-mmsproxy": "210.55.11.73",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "VFNZ Internet",
                    "-mcc": "530",
                    "-mnc": "02",
                    "-apn": "www.vodafone.net.nz",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telecom NZ",
                    "-mcc": "530",
                    "-mnc": "03",
                    "-apn": "internet.telecom.co.nz",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telecom NZ MMS",
                    "-mcc": "530",
                    "-mnc": "03",
                    "-apn": "wap.telecom.co.nz",
                    "-mmsc": "http://lsmmsc.xtra.co.nz",
                    "-mmsproxy": "210.55.11.73",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "XT Mobile",
                    "-mcc": "530",
                    "-mnc": "05",
                    "-apn": "internet.telecom.co.nz",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "XT Mobile MMS",
                    "-mcc": "530",
                    "-mnc": "05",
                    "-apn": "wap.telecom.co.nz",
                    "-mmsc": "http://lsmmsc.xtra.co.nz",
                    "-mmsproxy": "210.55.11.73",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "2degrees Internet",
                    "-mcc": "530",
                    "-mnc": "24",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "2degrees MMS",
                    "-mcc": "530",
                    "-mnc": "24",
                    "-apn": "mms",
                    "-mmsc": "http://mms.2degreesmobile.net.nz:48090",
                    "-mmsproxy": "118.148.1.118",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone FJ MMS",
                    "-mcc": "542",
                    "-mnc": "01",
                    "-apn": "live.vodafone.com.fj",
                    "-mmsc": "http://pxt.vodafone.net.fj/pxtsend",
                    "-mmsproxy": "010.202.002.040",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Vodafone FJ",
                    "-mcc": "542",
                    "-mnc": "01",
                    "-apn": "vfinternet.fj",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Digicel FJ MMS",
                    "-mcc": "542",
                    "-mnc": "02",
                    "-apn": "wap.digicelpacific.com",
                    "-mmsc": "http://mms.digicelpacific.com:8990",
                    "-mmsproxy": "10.150.122.12",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Digicel FJ",
                    "-mcc": "542",
                    "-mnc": "02",
                    "-apn": "web.digicelpacific.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Wap OPT KNC",
                    "-mcc": "546",
                    "-mnc": "01",
                    "-apn": "wap",
                    "-user": "Wap",
                    "-password": "Wap123",
                    "-proxy": "192.168.39.101",
                    "-port": "3130",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Internet OPT KNC",
                    "-mcc": "546",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-user": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "3g OPT KNC",
                    "-mcc": "546",
                    "-mnc": "01",
                    "-apn": "3g",
                    "-user": "3g",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Mms OPT KNC",
                    "-mcc": "546",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms123",
                    "-mmsproxy": "192.168.39.201",
                    "-mmsport": "3130",
                    "-mmsc": "http://mms.mobitag.nc/mmsc/",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobinil MMS",
                    "-mcc": "602",
                    "-mnc": "01",
                    "-apn": "mobinilmms",
                    "-mmsc": "http://10.7.13.24:8002",
                    "-mmsproxy": "62.241.155.45",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Mobinil",
                    "-mcc": "602",
                    "-mnc": "01",
                    "-apn": "mobinilweb",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone EG",
                    "-mcc": "602",
                    "-mnc": "02",
                    "-apn": "internet.vodafone.net",
                    "-user": "internet",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodafone EG MMS",
                    "-mcc": "602",
                    "-mnc": "02",
                    "-apn": "mms.vodafone.com.eg",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.vodafone.com.eg/servlets/mms",
                    "-mmsproxy": "163.121.178.002",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Etisalat internet",
                    "-mcc": "602",
                    "-mnc": "03",
                    "-apn": "Etisalat",
                    "-mmsc": "http://10.71.131.7:38090",
                    "-mmsproxy": "10.71.130.29",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Mobilis",
                    "-mcc": "603",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-user": "internet",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Mobilis MMS",
                    "-mcc": "603",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://172.025.049.009/servlets/mms",
                    "-mmsproxy": "172.25.49.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Djezzy",
                    "-mcc": "603",
                    "-mnc": "02",
                    "-apn": "djezzy.internet",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Djezzy MMS",
                    "-mcc": "603",
                    "-mnc": "02",
                    "-apn": "djezzy.mms",
                    "-mmsc": "http://172.024.97.152:10021/mmsc",
                    "-mmsproxy": "172.024.97.158",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Nedjma",
                    "-mcc": "603",
                    "-mnc": "03",
                    "-apn": "internet",
                    "-user": "nedjma",
                    "-password": "nedjma",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Nedjma MMS",
                    "-mcc": "603",
                    "-mnc": "03",
                    "-apn": "nedjmaMMS",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://10.10.111.1",
                    "-mmsproxy": "192.168.52.3",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Meditel",
                    "-mcc": "604",
                    "-mnc": "00",
                    "-apn": "internet1.meditel.ma",
                    "-user": "MEDIWAP",
                    "-password": "MEDIWAP",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Meditel MMS",
                    "-mcc": "604",
                    "-mnc": "00",
                    "-apn": "mms.meditel.ma",
                    "-user": "MEDIMMS",
                    "-password": "MEDIMMS",
                    "-mmsc": "http://mms.meditel.ma:8088/mms",
                    "-mmsproxy": "010.008.008.009",
                    "-type": "mms"
                },
                {
                    "-carrier": "IAM",
                    "-mcc": "604",
                    "-mnc": "01",
                    "-apn": "www.iamgprs1.ma",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "IAM MMS",
                    "-mcc": "604",
                    "-mnc": "01",
                    "-apn": "mmsiam",
                    "-mmsc": "http://mms:8002",
                    "-mmsproxy": "10.16.35.50",
                    "-mmsport": "8080",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Orange TN",
                    "-mcc": "605",
                    "-mnc": "01",
                    "-apn": "keypro",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "weborange",
                    "-mcc": "605",
                    "-mnc": "01",
                    "-apn": "weborange",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "605",
                    "-mnc": "01",
                    "-apn": "mms.otun",
                    "-mmsc": "http://mms.orange.tn",
                    "-mmsproxy": "10.12.1.52",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Libyana MMS",
                    "-mcc": "606",
                    "-mnc": "00",
                    "-apn": "mms",
                    "-mmsc": "http://62.240.62.180:80",
                    "-mmsproxy": "192.168.8.148",
                    "-mmsport": "8000",
                    "-type": "mms"
                },
                {
                    "-carrier": "Libyana",
                    "-mcc": "606",
                    "-mnc": "00",
                    "-apn": "wap",
                    "-proxy": "192.168.8.148",
                    "-port": "8000",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Al-Madar MMS",
                    "-mcc": "606",
                    "-mnc": "01",
                    "-apn": "almadar.mms",
                    "-mmsc": "http://almadar.mms/servlets/mms",
                    "-mmsproxy": "41.208.82.50",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Al-Madar",
                    "-mcc": "606",
                    "-mnc": "01",
                    "-apn": "almadar.net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange MMS SN",
                    "-mcc": "608",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mmsalize/servlets/mms",
                    "-mmsproxy": "172.16.30.9",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange Wap SN",
                    "-mcc": "608",
                    "-mnc": "01",
                    "-apn": "wap",
                    "-user": "wap",
                    "-password": "wap",
                    "-proxy": "172.16.30.9",
                    "-port": "8080",
                    "-type": "default"
                },
                {
                    "-carrier": "Orange Web SN",
                    "-mcc": "608",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-user": "internet",
                    "-password": "internet",
                    "-type": "default"
                },
                {
                    "-carrier": "Orange ML",
                    "-mcc": "610",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-user": "internet",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange ML MMS",
                    "-mcc": "610",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://10.109.6.2/servlets/mms",
                    "-mmsproxy": "10.109.4.35",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange Wap ML",
                    "-mcc": "610",
                    "-mnc": "02",
                    "-apn": "wap",
                    "-user": "wap",
                    "-password": "wap",
                    "-proxy": "10.109.4.35",
                    "-port": "8080",
                    "-type": "default"
                },
                {
                    "-carrier": "Omms CI",
                    "-mcc": "612",
                    "-mnc": "03",
                    "-apn": "orangecimms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://172.20.6.1/servlets/mms",
                    "-mmsproxy": "172.20.4.33",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "OWORLD CI",
                    "-mcc": "612",
                    "-mnc": "03",
                    "-apn": "orangeciwap",
                    "-user": "wap",
                    "-password": "wap",
                    "-proxy": "172.20.4.33",
                    "-port": "8080",
                    "-type": "default"
                },
                {
                    "-carrier": "MTN CI MMS",
                    "-mcc": "612",
                    "-mnc": "05",
                    "-apn": "mms.mtn.ci",
                    "-mmsc": "http://mms.mtn.ci/mms/wapenc",
                    "-mmsproxy": "172.16.100.5",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "MTN CI",
                    "-mcc": "612",
                    "-mnc": "05",
                    "-apn": "web.mtn.ci",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "614",
                    "-mnc": "04",
                    "-apn": "orange.mms",
                    "-user": "orange",
                    "-password": "orange",
                    "-mmsc": "http://10.10.10.35:38090/was",
                    "-mmsproxy": "10.10.10.36",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange Internet",
                    "-mcc": "614",
                    "-mnc": "04",
                    "-apn": "orange.ne",
                    "-type": "default"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "617",
                    "-mnc": "01",
                    "-apn": "orangemms",
                    "-user": "mmsc",
                    "-password": "mmsc",
                    "-mmsc": "http://10.2.1.20:8514",
                    "-mmsproxy": "10.2.1.20",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange Internet",
                    "-mcc": "617",
                    "-mnc": "01",
                    "-apn": "orange",
                    "-type": "default"
                },
                {
                    "-carrier": "Zain NG",
                    "-mcc": "621",
                    "-mnc": "20",
                    "-apn": "internet.ng.zain.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTN NG",
                    "-mcc": "621",
                    "-mnc": "30",
                    "-apn": "web.gprs.mtnnigeria.net",
                    "-user": "web",
                    "-password": "web",
                    "-proxy": "10.199.212.2",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTN NG MMS",
                    "-mcc": "621",
                    "-mnc": "30",
                    "-apn": "web.gprs.mtnnigeria.net",
                    "-user": "web",
                    "-password": "web",
                    "-mmsc": "http://10.199.212.8/servlets/mms",
                    "-mmsproxy": "10.199.212.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Glo",
                    "-mcc": "621",
                    "-mnc": "50",
                    "-apn": "glo3gvideo",
                    "-proxy": "10.100.98.22",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Glo MMS",
                    "-mcc": "621",
                    "-mnc": "50",
                    "-apn": "glomms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.gloworld.com/mmsc",
                    "-mmsproxy": "010.100.082.004",
                    "-mmsport": "3130",
                    "-type": "mms"
                },
                {
                    "-carrier": "Etisalat NG",
                    "-mcc": "621",
                    "-mnc": "60",
                    "-apn": "etisalat",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Etisalat NG MMS",
                    "-mcc": "621",
                    "-mnc": "60",
                    "-apn": "etisalat",
                    "-mmsc": "http://10.71.170.30:38090/was",
                    "-mmsproxy": "10.71.170.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "MTN CM",
                    "-mcc": "624",
                    "-mnc": "01",
                    "-apn": "INTERNET",
                    "-user": "guest",
                    "-password": "guest",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange CM",
                    "-mcc": "624",
                    "-mnc": "02",
                    "-apn": "orangecmgprs",
                    "-user": "orange",
                    "-password": "orange",
                    "-proxy": "192.168.122.101",
                    "-port": "8080",
                    "-mmsc": "http://mms.orange.cm",
                    "-mmsproxy": "192.168.122.101",
                    "-mmsport": "8080",
                    "-type": "default,mms"
                },
                {
                    "-carrier": "Orange GQ MMS",
                    "-mcc": "627",
                    "-mnc": "01",
                    "-apn": "orangemms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://192.168.17.34/servlets/mms",
                    "-mmsproxy": "192.168.17.2",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange GQ",
                    "-mcc": "627",
                    "-mnc": "01",
                    "-apn": "orangenet",
                    "-user": "net",
                    "-password": "net",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodacom CD",
                    "-mcc": "630",
                    "-mnc": "01",
                    "-apn": "vodanet",
                    "-user": "vodalive",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Unitel",
                    "-mcc": "631",
                    "-mnc": "02",
                    "-apn": "internet.unitel.co.ao",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Movicel Angola",
                    "-mcc": "631",
                    "-mnc": "04",
                    "-apn": "internet.movicel.co.ao",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Movicel Angola MMS",
                    "-mcc": "631",
                    "-mnc": "04",
                    "-apn": "mms.movicel.co.ao",
                    "-mmsc": "http://10.33.14.180:8080",
                    "-mmsproxy": "10.33.15.133",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Zain SD",
                    "-mcc": "634",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Safaricom",
                    "-mcc": "639",
                    "-mnc": "02",
                    "-apn": "wap.safaricom.com",
                    "-user": "saf",
                    "-password": "data",
                    "-mmsc": "http://mms.gprs.safaricom.com",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "yu",
                    "-mcc": "639",
                    "-mnc": "05",
                    "-apn": "internet",
                    "-proxy": "10.4.16.6",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "yu MMS",
                    "-mcc": "639",
                    "-mnc": "05",
                    "-apn": "iternet",
                    "-mmsc": "http://10.4.16.22/servlets/mms",
                    "-mmsproxy": "10.4.16.6",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange KE",
                    "-mcc": "639",
                    "-mnc": "07",
                    "-apn": "bew.orange.co.ke",
                    "-user": "orange",
                    "-password": "orange",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange net KE",
                    "-mcc": "639",
                    "-mnc": "07",
                    "-apn": "wap.orange.co.ke",
                    "-type": "default"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "639",
                    "-mnc": "07",
                    "-apn": "mms.orange.co.ke",
                    "-mmsproxy": "10.36.16.5",
                    "-mmsport": "8080",
                    "-mmsc": "http://10.36.16.5/servlets/mms",
                    "-type": "mms"
                },
                {
                    "-carrier": "Airtel Tanzania",
                    "-mcc": "640",
                    "-mnc": "05",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Airtel UG",
                    "-mcc": "641",
                    "-mnc": "01",
                    "-apn": "web.ug.zain.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTN UG",
                    "-mcc": "641",
                    "-mnc": "10",
                    "-apn": "yellopix.mtn.co.ug",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Uganda Telecom",
                    "-mcc": "641",
                    "-mnc": "11",
                    "-apn": "utweb",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange Internet UG",
                    "-mcc": "641",
                    "-mnc": "14",
                    "-apn": "orange.ug",
                    "-type": "default"
                },
                {
                    "-carrier": "Orange MMS",
                    "-mcc": "641",
                    "-mnc": "14",
                    "-apn": "orangemms",
                    "-mmsc": "http://mms/",
                    "-type": "mms"
                },
                {
                    "-carrier": "Waridtel UG",
                    "-mcc": "641",
                    "-mnc": "22",
                    "-apn": "web.waridtel.co.ug",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange MG MMS",
                    "-mcc": "646",
                    "-mnc": "02",
                    "-apn": "orangemms",
                    "-user": "mms",
                    "-password": "orange",
                    "-mmsc": "http://10.152.10.70.38090",
                    "-mmsproxy": "10.150.0.115",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange World MG",
                    "-mcc": "646",
                    "-mnc": "02",
                    "-apn": "orangeworld",
                    "-user": "world",
                    "-password": "orange",
                    "-proxy": "10.150.0.115",
                    "-port": "8080",
                    "-type": "default"
                },
                {
                    "-carrier": "Orange MG",
                    "-mcc": "646",
                    "-mnc": "02",
                    "-apn": "orangenet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange RE MMS",
                    "-mcc": "647",
                    "-mnc": "00",
                    "-apn": "orangerun.acte",
                    "-user": "orange",
                    "-password": "orange",
                    "-mmsc": "http://mms.orange.re/",
                    "-mmsproxy": "192.168.010.200",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange RE",
                    "-mcc": "647",
                    "-mnc": "00",
                    "-apn": "orangerun",
                    "-user": "orange",
                    "-password": "orange",
                    "-type": "default"
                },
                {
                    "-carrier": "Orange MMS R��union",
                    "-mcc": "647",
                    "-mnc": "00",
                    "-apn": "orangerun.acte",
                    "-user": "orange",
                    "-password": "orange",
                    "-mmsc": "http://mms.orange.re",
                    "-mmsproxy": "192.168.10.200",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SFR MMS",
                    "-mcc": "647",
                    "-mnc": "10",
                    "-apn": "mmssfr",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "10.0.224.145",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "SFR NET",
                    "-mcc": "647",
                    "-mnc": "10",
                    "-apn": "sl2sfr",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TNM",
                    "-mcc": "650",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Mascom",
                    "-mcc": "652",
                    "-mnc": "01",
                    "-apn": "internet.mascom",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Orange BW MMS",
                    "-mcc": "652",
                    "-mnc": "02",
                    "-apn": "mms.orange.co.bw",
                    "-mmsc": "http://10.0.0.242/servlets/mms",
                    "-mmsproxy": "10.0.0.226",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Orange WAP BW",
                    "-mcc": "652",
                    "-mnc": "02",
                    "-apn": "internet.orange.co.bw",
                    "-proxy": "10.0.0.226",
                    "-port": "8080",
                    "-type": "default"
                },
                {
                    "-carrier": "Vodacom ZA",
                    "-mcc": "655",
                    "-mnc": "01",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Vodacom ZA MMS",
                    "-mcc": "655",
                    "-mnc": "01",
                    "-apn": "mms.vodacom.net",
                    "-mmsc": "http://mmsc.vodacom4me.co.za/",
                    "-mmsproxy": "196.6.128.13",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "LTE.Vodacom",
                    "-mcc": "655",
                    "-mnc": "01",
                    "-apn": "lte.vodacom.za",
                    "-type": "default"
                },
                {
                    "-carrier": "Vlive!",
                    "-mcc": "655",
                    "-mnc": "01",
                    "-apn": "vlive",
                    "-proxy": "196.6.128.12",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "8ta internet",
                    "-mcc": "655",
                    "-mnc": "02",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "8ta mms",
                    "-mcc": "655",
                    "-mnc": "02",
                    "-apn": "mms",
                    "-mmsc": "http://mms.8ta.com:38090/was",
                    "-mmsproxy": "41.151.254.162",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Cell C",
                    "-mcc": "655",
                    "-mnc": "07",
                    "-apn": "Internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Cell C MMS",
                    "-mcc": "655",
                    "-mnc": "07",
                    "-apn": "mms",
                    "-mmsc": "http://mms.cmobile.co.za",
                    "-mmsproxy": "196.031.116.250",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Virgin Mobile SA Internet",
                    "-mcc": "655",
                    "-mnc": "07",
                    "-apn": "vdata",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Virgin Mobile SA Internet",
                    "-mcc": "655",
                    "-mnc": "07",
                    "-apn": "vmms",
                    "-mmsc": "http://mms.virginmobile.co.za",
                    "-mmsproxy": "196.31.116.242",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "MTN SA Web",
                    "-mcc": "655",
                    "-mnc": "10",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTN ZA",
                    "-mcc": "655",
                    "-mnc": "10",
                    "-apn": "myMTN",
                    "-user": "mtn",
                    "-password": "mtn",
                    "-server": "*",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MTN ZA MMS",
                    "-mcc": "655",
                    "-mnc": "10",
                    "-apn": "myMTN",
                    "-user": "mtnmms",
                    "-password": "mtnmms",
                    "-mmsc": "http://mms.mtn.co.za/mms/wapenc",
                    "-mmsproxy": "196.11.240.241",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Claro SV",
                    "-mcc": "706",
                    "-mnc": "01",
                    "-apn": "internet.claro.sv",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Claro SV MMS",
                    "-mcc": "706",
                    "-mnc": "01",
                    "-apn": "mms.claro.sv",
                    "-mmsc": "http://mms.claro.sv",
                    "-mmsproxy": "216.230.133.66",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Digicel SV",
                    "-mcc": "706",
                    "-mnc": "02",
                    "-apn": "wap.digicelsv.com",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Digicel SV MMS",
                    "-mcc": "706",
                    "-mnc": "02",
                    "-apn": "wap.digicelsv.com",
                    "-mmsc": "http://172.26.5.132/servlets/mms",
                    "-mmsproxy": "172.26.5.12",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tigo SV",
                    "-mcc": "706",
                    "-mnc": "03",
                    "-apn": "broadband.tigo.sv",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tigo SV MMS",
                    "-mcc": "706",
                    "-mnc": "03",
                    "-apn": "mms.tigo.sv",
                    "-mmsc": "http://mms",
                    "-mmsproxy": "10.16.27.12",
                    "-mmsport": "8888",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar SV",
                    "-mcc": "706",
                    "-mnc": "04",
                    "-apn": "internet.movistar.sv",
                    "-user": "movistarsv",
                    "-password": "movistarsv",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Movistar SV MMS",
                    "-mcc": "706",
                    "-mnc": "04",
                    "-apn": "mms.movistar.sv",
                    "-user": "movistarsv",
                    "-password": "movistarsv",
                    "-mmsc": "http://mms.movistar.sv",
                    "-mmsproxy": "10.12.20.1",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "Enitel",
                    "-mcc": "710",
                    "-mnc": "21",
                    "-apn": "internet.ideasalo.ni",
                    "-type": "default,supl,dun",
                    "-user": "internet",
                    "-password": "internet",
                    "-authtype": "1"
                },
                {
                    "-carrier": "Enitel MMS",
                    "-mcc": "710",
                    "-mnc": "21",
                    "-apn": "mms.indeasalo.ni",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsproxy": "10.6.32.2",
                    "-mmsport": "8080",
                    "-mmsc": "http://10.6.32.27/servlets/mms",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar",
                    "-mcc": "710",
                    "-mnc": "30",
                    "-apn": "internet.movistar.ni",
                    "-user": "movistarni",
                    "-password": "movistarni",
                    "-authtype": "1",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "Movistar MMS",
                    "-mcc": "710",
                    "-mnc": "30",
                    "-apn": "mms.movistar.ni",
                    "-user": "movistarni",
                    "-password": "movistarni",
                    "-mmsproxy": "10.12.23.1",
                    "-mmsport": "80",
                    "-mmsc": "http://mms.movistar.ni",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "Enitel",
                    "-mcc": "710",
                    "-mnc": "73",
                    "-apn": "internet.ideasalo.ni",
                    "-user": "internet",
                    "-password": "internet",
                    "-authtype": "1",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "Enitel MMS",
                    "-mcc": "710",
                    "-mnc": "73",
                    "-apn": "mms.indeasalo.ni",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsproxy": "10.6.32.2",
                    "-mmsport": "8080",
                    "-mmsc": "http://10.6.32.27/servlets/mms",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar",
                    "-mcc": "710",
                    "-mnc": "300",
                    "-apn": "internet.movistar.ni",
                    "-user": "movistarni",
                    "-password": "movistarni",
                    "-authtype": "1",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "Movistar MMS",
                    "-mcc": "710",
                    "-mnc": "300",
                    "-apn": "mms.movistar.ni",
                    "-user": "movistarni",
                    "-password": "movistarni",
                    "-mmsproxy": "10.12.23.1",
                    "-mmsport": "80",
                    "-mmsc": "http://mms.movistar.ni",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "Enitel",
                    "-mcc": "710",
                    "-mnc": "730",
                    "-apn": "internet.ideasalo.ni",
                    "-user": "internet",
                    "-password": "internet",
                    "-authtype": "1",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "Enitel MMS",
                    "-mcc": "710",
                    "-mnc": "730",
                    "-apn": "mms.indeasalo.ni",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsproxy": "10.6.32.2",
                    "-mmsport": "8080",
                    "-mmsc": "http://10.6.32.27/servlets/mms",
                    "-authtype": "1",
                    "-type": "mms"
                },
                {
                    "-carrier": "Cable and Wireless Panama",
                    "-mcc": "714",
                    "-mnc": "01",
                    "-apn": "apn01.cwpanama.com.pa",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Cable and Wireless Panama MMS",
                    "-mcc": "714",
                    "-mnc": "01",
                    "-apn": "apn02.cwpanama.com.pa",
                    "-mmsc": "http://mms.zonamovil.com.pa:80/i.bin",
                    "-mmsproxy": "172.25.3.5",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Claro Web",
                    "-mcc": "714",
                    "-mnc": "03",
                    "-apn": "web.claro.com.pa",
                    "-user": "CLAROWEB",
                    "-password": "CLAROWEB",
                    "-authenticationtype": "PAP",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Claro MMS",
                    "-mcc": "714",
                    "-mnc": "03",
                    "-apn": "mms.claro.com.pa",
                    "-user": "CLAROMMS",
                    "-password": "CLAROMMS",
                    "-mmsc": "http://www.claro.com.pa/mms",
                    "-authenticationtype": "PAP",
                    "-type": "mms"
                },
                {
                    "-carrier": "QUAM",
                    "-mcc": "722",
                    "-mnc": "01",
                    "-apn": "internet.movil",
                    "-user": "internet",
                    "-password": "internet",
                    "-authenticationtype": "PAP",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "QUAM MMS",
                    "-mcc": "722",
                    "-mnc": "01",
                    "-apn": "mms.movil",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.quam.com.ar",
                    "-mmsproxy": "200.68.32.239",
                    "-mmsport": "9090",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar AG",
                    "-mcc": "722",
                    "-mnc": "007",
                    "-apn": "internet.unifon",
                    "-user": "wap",
                    "-password": "password",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Movistar AG MMS",
                    "-mcc": "722",
                    "-mnc": "007",
                    "-apn": "mms.gprs.unifon.com.ar",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.tmovil.cl/",
                    "-mmsproxy": "200.068.032.239",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar AR",
                    "-mcc": "722",
                    "-mnc": "07",
                    "-apn": "wap.gprs.unifon.com.ar",
                    "-proxy": "200.5.68.10",
                    "-port": "8080",
                    "-user": "wap",
                    "-password": "wap",
                    "-authenticationtype": "PAP",
                    "-type": "default,supl,dun"
                },
                {
                    "-carrier": "Movistar AR MMS",
                    "-mcc": "722",
                    "-mnc": "07",
                    "-apn": "mms.gprs.unifon.com.ar",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://movistar.com.ar",
                    "-mmsproxy": "200.68.32.239",
                    "-mmsport": "8080",
                    "-authenticationtype": "PAP",
                    "-type": "mms"
                },
                {
                    "-carrier": "Personal",
                    "-mcc": "722",
                    "-mnc": "34",
                    "-apn": "datos.personal.com",
                    "-user": "datos",
                    "-password": "datos",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Personal MMS",
                    "-mcc": "722",
                    "-mnc": "34",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.personal.com/",
                    "-mmsproxy": "172.025.007.031",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "CTI",
                    "-mcc": "722",
                    "-mnc": "310",
                    "-apn": "internet.ctimovil.com.ar",
                    "-user": "guest",
                    "-password": "guest",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "CTI MMS",
                    "-mcc": "722",
                    "-mnc": "310",
                    "-apn": "mms.ctimovil.com.ar",
                    "-user": "ctimms",
                    "-password": "ctimms999",
                    "-mmsc": "http://mms.ctimovil.com.ar",
                    "-mmsproxy": "170.051.255.240",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Claro AR",
                    "-mcc": "722",
                    "-mnc": "310",
                    "-apn": "igprs.claro.com.ar",
                    "-user": "ctigprs",
                    "-password": "ctigpr999",
                    "-authenticationtype": "PAP",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Claro AR MMS",
                    "-mcc": "722",
                    "-mnc": "310",
                    "-apn": "mms.ctimovil.com.ar",
                    "-user": "ctimms",
                    "-password": "ctimms999",
                    "-mmsc": "http://mms.ctimovil.com.ar",
                    "-mmsproxy": "170.051.255.240",
                    "-mmsport": "8080",
                    "-authenticationtype": "PAP",
                    "-type": "mms"
                },
                {
                    "-carrier": "Personal",
                    "-mcc": "722",
                    "-mnc": "341",
                    "-apn": "datos.personal.com",
                    "-user": "datos",
                    "-password": "datos",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Personal MMS",
                    "-mcc": "722",
                    "-mnc": "341",
                    "-apn": "mms",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.personal.com/",
                    "-mmsproxy": "172.025.007.031",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "TIM BR CONNECT FAST",
                    "-mcc": "724",
                    "-mnc": "02",
                    "-apn": "timbrasil.br",
                    "-user": "tim",
                    "-password": "tim",
                    "-authenticationtype": "PAP",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TIM BR MMS",
                    "-mcc": "724",
                    "-mnc": "02",
                    "-apn": "mms.tim.br",
                    "-user": "tim",
                    "-password": "tim",
                    "-mmsc": "http://mms.tim.br",
                    "-mmsproxy": "200.179.66.242",
                    "-mmsport": "8080",
                    "-authenticationtype": "PAP",
                    "-type": "mms"
                },
                {
                    "-carrier": "TIM BR CONNECT FAST",
                    "-mcc": "724",
                    "-mnc": "03",
                    "-apn": "timbrasil.br",
                    "-user": "tim",
                    "-password": "tim",
                    "-authenticationtype": "PAP",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TIM BR MMS",
                    "-mcc": "724",
                    "-mnc": "03",
                    "-apn": "mms.tim.br",
                    "-user": "tim",
                    "-password": "tim",
                    "-mmsc": "http://mms.tim.br",
                    "-mmsproxy": "200.179.66.242",
                    "-mmsport": "8080",
                    "-authenticationtype": "PAP",
                    "-type": "mms"
                },
                {
                    "-carrier": "TIM BR CONNECT FAST",
                    "-mcc": "724",
                    "-mnc": "04",
                    "-apn": "timbrasil.br",
                    "-user": "tim",
                    "-password": "tim",
                    "-authenticationtype": "PAP",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "TIM BR MMS",
                    "-mcc": "724",
                    "-mnc": "04",
                    "-apn": "mms.tim.br",
                    "-user": "tim",
                    "-password": "tim",
                    "-mmsc": "http://mms.tim.br",
                    "-mmsproxy": "200.179.66.242",
                    "-mmsport": "8080",
                    "-authenticationtype": "PAP",
                    "-type": "mms"
                },
                {
                    "-carrier": "Claro BR",
                    "-mcc": "724",
                    "-mnc": "05",
                    "-apn": "claro.com.br",
                    "-user": "claro",
                    "-password": "claro",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Claro BR MMS",
                    "-mcc": "724",
                    "-mnc": "05",
                    "-apn": "mms.claro.com.br",
                    "-user": "claro",
                    "-password": "claro",
                    "-mmsc": "http://mms.claro.com.br",
                    "-mmsproxy": "200.169.126.10",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "Portal Claro",
                    "-mcc": "724",
                    "-mnc": "05",
                    "-apn": "wap.claro.com.br",
                    "-user": "claro",
                    "-password": "claro",
                    "-proxy": "200.169.126.11",
                    "-port": "8799",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VIVO MMS",
                    "-mcc": "724",
                    "-mnc": "06",
                    "-apn": "mms.vivo.com.br",
                    "-user": "vivo",
                    "-password": "vivo",
                    "-mmsc": "http://termnat.vivomms.com.br:8088/mms",
                    "-mmsproxy": "200.142.130.104",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "VIVO ZAP",
                    "-mcc": "724",
                    "-mnc": "06",
                    "-apn": "zap.vivo.com.br",
                    "-user": "vivo",
                    "-password": "vivo",
                    "-mmsc": "null",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "SCTL MMS",
                    "-mcc": "724",
                    "-mnc": "07",
                    "-apn": "mms.sercomtel.com.br",
                    "-user": "sercomtel",
                    "-password": "sercomtel",
                    "-mmsc": "http://mms.claro.com.br",
                    "-mmsproxy": "200.169.126.10",
                    "-mmsport": "8799",
                    "-type": "mms"
                },
                {
                    "-carrier": "SCTL GPRS",
                    "-mcc": "724",
                    "-mnc": "07",
                    "-apn": "sercomtel.com.br",
                    "-user": "sercomtel",
                    "-password": "sercomtel",
                    "-mmsc": "null",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VIVO MMS",
                    "-mcc": "724",
                    "-mnc": "10",
                    "-apn": "mms.vivo.com.br",
                    "-user": "vivo",
                    "-password": "vivo",
                    "-mmsc": "http://termnat.vivomms.com.br:8088/mms",
                    "-mmsproxy": "200.142.130.104",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "VIVO ZAP",
                    "-mcc": "724",
                    "-mnc": "10",
                    "-apn": "zap.vivo.com.br",
                    "-user": "vivo",
                    "-password": "vivo",
                    "-mmsc": "null",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VIVO MMS",
                    "-mcc": "724",
                    "-mnc": "11",
                    "-apn": "mms.vivo.com.br",
                    "-user": "vivo",
                    "-password": "vivo",
                    "-mmsc": "http://termnat.vivomms.com.br:8088/mms",
                    "-mmsproxy": "200.142.130.104",
                    "-mmsport": "80",
                    "-type": "mms"
                },
                {
                    "-carrier": "VIVO ZAP",
                    "-mcc": "724",
                    "-mnc": "11",
                    "-apn": "zap.vivo.com.br",
                    "-user": "vivo",
                    "-password": "vivo",
                    "-mmsc": "null",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BrT Internet",
                    "-mcc": "724",
                    "-mnc": "16",
                    "-apn": "brt.br",
                    "-user": "brt",
                    "-password": "brt",
                    "-mmsc": "null",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "BrT MMS",
                    "-mcc": "724",
                    "-mnc": "16",
                    "-apn": "mms.brt.br",
                    "-user": "brt",
                    "-password": "brt",
                    "-mmsc": "http://mms.brasiltelecom.com.br/",
                    "-mmsproxy": "200.96.8.29",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telemig GPRS",
                    "-mcc": "724",
                    "-mnc": "19",
                    "-apn": "gprs.telemigcelular.com.br",
                    "-user": "celular",
                    "-password": "celular",
                    "-mmsc": "null",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telemig MMS",
                    "-mcc": "724",
                    "-mnc": "19",
                    "-apn": "mmsgprs.telemigcelular.com.br",
                    "-user": "celular",
                    "-password": "celular",
                    "-mmsc": "http://mms.telemigcelular.com.br",
                    "-mmsproxy": "200.192.230.142",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Telemig GPRS",
                    "-mcc": "724",
                    "-mnc": "23",
                    "-apn": "gprs.telemigcelular.com.br",
                    "-user": "celular",
                    "-password": "celular",
                    "-mmsc": "null",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Telemig MMS",
                    "-mcc": "724",
                    "-mnc": "23",
                    "-apn": "mmsgprs.telemigcelular.com.br",
                    "-user": "celular",
                    "-password": "celular",
                    "-mmsc": "http://mms.telemigcelular.com.br",
                    "-mmsproxy": "200.192.230.142",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Amazonia GPRS",
                    "-mcc": "724",
                    "-mnc": "24",
                    "-apn": "gprs.amazoniacelular.com.br",
                    "-user": "celular",
                    "-password": "celular",
                    "-mmsc": "null",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Amazonia MMS",
                    "-mcc": "724",
                    "-mnc": "24",
                    "-apn": "mmsgprs.amazoniacelular.com.br",
                    "-user": "celular",
                    "-password": "celular",
                    "-mmsc": "http://mms.amazoniacelular.com.br",
                    "-mmsproxy": "200.192.230.142",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Oi",
                    "-mcc": "724",
                    "-mnc": "31",
                    "-apn": "gprs.oi.com.br",
                    "-user": "oi",
                    "-password": "oi",
                    "-mmsc": "null",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Oi MMS",
                    "-mcc": "724",
                    "-mnc": "31",
                    "-apn": "mmsgprs.oi.com.br",
                    "-user": "oimms",
                    "-password": "oioioi",
                    "-mmsc": "http://200.222.042.204:8002",
                    "-mmsproxy": "192.168.10.50",
                    "-mmsport": "3128",
                    "-type": "mms"
                },
                {
                    "-carrier": "CTBC MMS",
                    "-mcc": "724",
                    "-mnc": "32",
                    "-apn": "mms.ctbc.br",
                    "-user": "ctbc",
                    "-password": "1212",
                    "-mmsc": "http://mms.ctbccelular.com.br/was",
                    "-mmsproxy": "172.29.7.70",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "CTBC MMS",
                    "-mcc": "724",
                    "-mnc": "33",
                    "-apn": "mms.ctbc.br",
                    "-user": "ctbc",
                    "-password": "1212",
                    "-mmsc": "http://mms.ctbccelular.com.br/was",
                    "-mmsproxy": "172.29.7.70",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "CTBC MMS",
                    "-mcc": "724",
                    "-mnc": "34",
                    "-apn": "mms.ctbc.br",
                    "-user": "ctbc",
                    "-password": "1212",
                    "-mmsc": "http://mms.ctbccelular.com.br/was",
                    "-mmsproxy": "172.29.7.70",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Nextel 3G",
                    "-mcc": "724",
                    "-mnc": "39",
                    "-apn": "datacard.nextel3g.net.br",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Entel PCS",
                    "-mcc": "730",
                    "-mnc": "01",
                    "-apn": "bam.entelpcs.cl",
                    "-user": "entelpcs",
                    "-password": "entelpcs",
                    "-proxy": "10.99.0.10",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Entel MMS",
                    "-mcc": "730",
                    "-mnc": "01",
                    "-apn": "mms.entelpcs.cl",
                    "-user": "entelmms",
                    "-password": "entelpcs",
                    "-mmsc": "http://mmsc.entelpcs.cl",
                    "-mmsproxy": "10.99.0.10",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar CL",
                    "-mcc": "730",
                    "-mnc": "02",
                    "-apn": "web.tmovil.cl",
                    "-user": "web",
                    "-password": "web",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Movistar CL MMS",
                    "-mcc": "730",
                    "-mnc": "02",
                    "-apn": "mms.tmovil.cl",
                    "-user": "mms",
                    "-password": "mms",
                    "-mmsc": "http://mms.tmovil.cl",
                    "-mmsproxy": "172.017.008.011",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Claro CL",
                    "-mcc": "730",
                    "-mnc": "03",
                    "-apn": "bam.clarochile.cl",
                    "-user": "clarochile",
                    "-password": "clarochile",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS CLARO",
                    "-mcc": "730",
                    "-mnc": "03",
                    "-apn": "mms.clarochile.cl",
                    "-user": "clarochile",
                    "-password": "clarochile",
                    "-mmsc": "http://mms.clarochile.cl",
                    "-mmsproxy": "172.23.200.200",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Virgin Mobile CL",
                    "-mcc": "730",
                    "-mnc": "07",
                    "-apn": "imovil.virginmobile.cl",
                    "-type": "default"
                },
                {
                    "-carrier": "Internet Movil",
                    "-mcc": "730",
                    "-mnc": "10",
                    "-apn": "bam.entelpcs.cl",
                    "-user": "entelpcs",
                    "-password": "entelpcs",
                    "-proxy": "10.99.0.10",
                    "-port": "8080",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "WEB EPCS",
                    "-mcc": "730",
                    "-mnc": "10",
                    "-apn": "imovil.entelpcs.cl",
                    "-user": "entelpcs",
                    "-password": "entelpcs",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS EPCS",
                    "-mcc": "730",
                    "-mnc": "10",
                    "-apn": "mms.entelpcs.cl",
                    "-user": "entelmms",
                    "-password": "entelpcs",
                    "-mmsc": "http://mmsc.entelpcs.cl",
                    "-mmsproxy": "10.99.0.10",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "COMCEL",
                    "-mcc": "732",
                    "-mnc": "101",
                    "-apn": "internet.comcel.com.co",
                    "-user": "COMCELWEB",
                    "-password": "COMCELWEB",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "COMCEL MMS",
                    "-mcc": "732",
                    "-mnc": "101",
                    "-apn": "mms.comcel.com.co",
                    "-user": "COMCELMMS",
                    "-password": "*********",
                    "-mmsc": "http://mms.comcel.com.co/mms/",
                    "-mmsproxy": "198.228.90.225",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar CO",
                    "-mcc": "732",
                    "-mnc": "102",
                    "-apn": "internet.movistar.com.co",
                    "-user": "movistar",
                    "-password": "movistar",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tigo MMS",
                    "-mcc": "732",
                    "-mnc": "103",
                    "-apn": "mms.colombiamovil.com.co",
                    "-user": "mms-cm1900",
                    "-password": "mms-cm1900",
                    "-mmsc": "mmsc.colombiamovil.com.co",
                    "-mmsproxy": "190.102.206.48",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Tigo",
                    "-mcc": "732",
                    "-mnc": "103",
                    "-apn": "web.colombiamovil.com.co",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "OLA",
                    "-mcc": "732",
                    "-mnc": "111",
                    "-apn": "internet",
                    "-user": "internet",
                    "-password": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "OLA MMS",
                    "-mcc": "732",
                    "-mnc": "111",
                    "-apn": "mms.comcel.com.co",
                    "-mmsc": "http://mms.ola.com.co",
                    "-mmsproxy": "200.058.228.081",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar CO",
                    "-mcc": "732",
                    "-mnc": "123",
                    "-apn": "internet.movistar.com.co",
                    "-user": "movistar",
                    "-password": "movistar",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Digitel",
                    "-mcc": "734",
                    "-mnc": "02",
                    "-apn": "gprsweb.digitel.ve",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Digitel MMS",
                    "-mcc": "734",
                    "-mnc": "02",
                    "-apn": "expresate.digitel.ve",
                    "-mmsc": "http://expresate.digitel.ve",
                    "-mmsproxy": "213.026.205.001",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar VE",
                    "-mcc": "734",
                    "-mnc": "04",
                    "-apn": "internet.movistar.ve",
                    "-mmsc": "http://mms.movistar.ve",
                    "-mmsproxy": "200.35.64.73",
                    "-mmsport": "9001",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "Movilnet",
                    "-mcc": "734",
                    "-mnc": "06",
                    "-apn": "int.movilnet.com.ve",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Movilnet MMS",
                    "-mcc": "734",
                    "-mnc": "06",
                    "-apn": "mm.movilnet.com.ve",
                    "-mmsc": "http://mms2.movilnet.com.ve/servlets/mms",
                    "-mmsproxy": "192.168.16.12",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Viva GPRS",
                    "-mcc": "736",
                    "-mnc": "01",
                    "-apn": "internet.nuevatel.com",
                    "-proxy": "192.168.101.4",
                    "-port": "3128",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Viva MMS",
                    "-mcc": "736",
                    "-mnc": "01",
                    "-apn": "mms.nuevatel.com",
                    "-server": "mmsgw.nuevatel.com:1981",
                    "-mmsc": "http://mmsgw.nuevatel.com:1981",
                    "-mmsproxy": "192.168.101.4",
                    "-mmsport": "3128",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar EC",
                    "-mcc": "740",
                    "-mnc": "00",
                    "-apn": "internet.movistar.com.ec",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Porta EC",
                    "-mcc": "740",
                    "-mnc": "010",
                    "-apn": "internet.porta.com.ec",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VOX Internet",
                    "-mcc": "744",
                    "-mnc": "01",
                    "-apn": "vox.internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "VOX MMS",
                    "-mcc": "744",
                    "-mnc": "01",
                    "-apn": "vox.mms",
                    "-type": "mms",
                    "-user": "vox",
                    "-password": "vox",
                    "-mmsc": "http://mms.vox.com.py/mmsc",
                    "-mmsproxy": "172.24.97.29",
                    "-mmsport": "8080"
                },
                {
                    "-carrier": "Tigo Internet",
                    "-mcc": "744",
                    "-mnc": "04",
                    "-apn": "internet.tigo.py",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Tigo MMS",
                    "-mcc": "744",
                    "-mnc": "04",
                    "-apn": "mms.tigo.py",
                    "-user": "tigo",
                    "-password": "tigo",
                    "-mmsproxy": "10.16.17.12",
                    "-mmsport": "8888",
                    "-mmsc": "http://mms",
                    "-type": "mms"
                },
                {
                    "-carrier": "Internet Personal",
                    "-mcc": "744",
                    "-mnc": "05",
                    "-apn": "internet",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "MMS Personal",
                    "-mcc": "744",
                    "-mnc": "05",
                    "-apn": "mms",
                    "-mmsc": "http://mms.personal.com.py",
                    "-mmsproxy": "172.16.192.7",
                    "-mmsport": "8080",
                    "-type": "mms"
                },
                {
                    "-carrier": "Ancel",
                    "-mcc": "748",
                    "-mnc": "01",
                    "-apn": "ancel",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Ancel MMS",
                    "-mcc": "748",
                    "-mnc": "01",
                    "-apn": "mms",
                    "-mmsc": "http://mmsc.mms.ancelutil.com.uy",
                    "-mmsproxy": "200.40.246.2",
                    "-mmsport": "3128",
                    "-type": "mms"
                },
                {
                    "-carrier": "Antel",
                    "-mcc": "748",
                    "-mnc": "01",
                    "-apn": "wap",
                    "-proxy": "200.40.246.2",
                    "-port": "3128",
                    "-server": "www.dale.com.uy",
                    "-mmsc": "http://mmsc.mms.ancelutil.com.uy",
                    "-mmsproxy": "200.40.246.2",
                    "-mmspor": "3128",
                    "-type": "default,supl,mms"
                },
                {
                    "-carrier": "BAM Pepaga Antel",
                    "-mcc": "748",
                    "-mnc": "01",
                    "-apn": "prepago.ancel",
                    "-user": "bam",
                    "-password": "bam",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Movistar UY MMS",
                    "-mcc": "748",
                    "-mnc": "07",
                    "-apn": "apnmms.movistar.com.uy",
                    "-user": "mmsuy",
                    "-password": "mmsuy",
                    "-mmsc": "http://mmsc.movistar.com.uy",
                    "-mmsproxy": "010.000.002.029",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "Movistar UY",
                    "-mcc": "748",
                    "-mnc": "07",
                    "-apn": "apnumt.movistar.com.uy",
                    "-user": "movistar",
                    "-password": "movistar",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Claro UY",
                    "-mcc": "748",
                    "-mnc": "10",
                    "-apn": "gprs.claro.com.uy",
                    "-user": "ctigpr",
                    "-password": "ctigpr999",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Claro UY MMS",
                    "-mcc": "748",
                    "-mnc": "10",
                    "-apn": "mms.ctimovil.com.uy",
                    "-user": "ctimms",
                    "-password": "ctimms999",
                    "-mmsc": "http://mms.ctimovil.com.uy",
                    "-mmsproxy": "170.051.255.240",
                    "-mmsport": "9201",
                    "-type": "mms"
                },
                {
                    "-carrier": "China Unicom 3G HK",
                    "-mcc": "454",
                    "-mnc": "07",
                    "-apn": "3gnet",
                    "-port": "80",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Verzon",
                    "-mcc": "311",
                    "-mnc": "480",
                    "-apn": "VZWINTERNET",
                    "-type": "mms",
                    "-protocol": "IPV4V6",
                    "-roaming_protocol": "IPV4V6"
                },
                {
                    "-carrier": "Movistar PA",
                    "-apn": "internet.movistar.pa",
                    "-user": "movistarpa",
                    "-password": "movistarpa",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Claro PA",
                    "-apn": "web.claro.com.pa",
                    "-user": "CLAROWEB",
                    "-pass": "CLAROWEB",
                    "-type": "default,supl"
                },
                {
                    "-carrier": "Digicel PA",
                    "-apn": "web.digicelpanama.com",
                    "-type": "default,supl"
                }
            ]
        }
    }
});
