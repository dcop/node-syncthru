import { SynchtruResponse } from "../model/SyncThruModel";

/* Response from printer is not a proper json, this is a wrkaround for testing purposes */
export const data: SynchtruResponse = {
  status: {
    hrDeviceStatus: 2,
    status1: "",
    status2: "",
    status3: "",
    status4: ""
  },
  identity: {
    model_name: "A_MODEL_NAME",
    host_name: "AN_HOST_NAME",
    location: "",
    serial_num: "A_SERIAL_NUM",
    ip_addr: "1.2.3.4",
    ipv6_link_addr: "",
    mac_addr: "A_MAC_ADDRESS",
    admin_email: "admin@email.com",
    admin_name: "admin",
    admin_phone: "ADMIN_PHONE_NUMBER",
    customer_support: ""
  },
  toner_black: {
    opt: 1,
    remaining: 28,
    cnt: 309,
    newError: ""
  },
  toner_cyan: {
    opt: 0,
    remaining: 6,
    cnt: 0,
    newError: ""
  },
  toner_magenta: {
    opt: 0,
    remaining: 56,
    cnt: 0,
    newError: ""
  },
  toner_yellow: {
    opt: 0,
    remaining: 82,
    cnt: 0,
    newError: ""
  },
  drum_black: {
    opt: 0,
    remaining: 0,
    newError: ""
  },
  drum_cyan: {
    opt: 0,
    remaining: 100,
    newError: ""
  },
  drum_magenta: {
    opt: 0,
    remaining: 100,
    newError: ""
  },
  drum_yellow: {
    opt: 0,
    remaining: 100,
    newError: ""
  },
  tray1: {
    opt: 1,
    paper_size1: 4,
    paper_size2: 0,
    paper_type1: 2,
    paper_type2: 0,
    capa: 150,
    newError: ""
  },
  tray2: {
    opt: 0,
    paper_size1: 0,
    paper_size2: 0,
    paper_type1: 2,
    paper_type2: 0,
    capa: 0,
    newError: ""
  },
  tray3: {
    opt: 0,
    paper_size1: 0,
    paper_size2: 0,
    paper_type1: 2,
    paper_type2: 0,
    capa: 0,
    newError: ""
  },
  tray4: {
    opt: 0,
    paper_size1: 0,
    paper_size2: 0,
    paper_type1: 2,
    paper_type2: 0,
    capa: 0,
    newError: ""
  },
  tray5: {
    opt: 0,
    paper_size1: 0,
    paper_size2: 0,
    paper_type1: 0,
    paper_type2: 0,
    capa: 0,
    newError: "0"
  },
  mp: {
    opt: 0,
    paper_size1: 0,
    paper_size2: 0,
    paper_type1: 2,
    paper_type2: 0,
    capa: 0,
    newError: ""
  },
  manual: {
    opt: 0,
    paper_size1: 0,
    paper_size2: 0,
    paper_type1: 2,
    paper_type2: 0,
    capa: 0,
    newError: ""
  },
  GXI_INTRAY_MANUALFEEDING_TRAY_SUPPORT: 0,
  GXI_INSTALL_OPTION_MULTIBIN: 0,
  multibin: [
    ["Bin", 100, 0]
  ],
  outputTray: [
    [1, 100, ""]
  ],
  capability: {
    hdd: {
      opt: 2,
      capa: 0
    },
    ram: {
      opt: 65536,
      capa: 65536
    },
    scanner: {
      opt: 0,
      capa: 0
    }
  },
  options: {
    wlan: 1
  },
  GXI_ACTIVE_ALERT_TOTAL: 0,
  GXI_ADMIN_WUI_HAS_DEFAULT_PASS: 0,
  GXI_SUPPORT_COLOR: 2,
  GXI_SYS_LUI_SUPPORT: 0,
  GXI_A3_SUPPORT: 0,
  GXI_TRAY2_MANDATORY_SUPPORT: 0,
  GXI_SWS_ADMIN_USE_AAA: 0,
  GXI_TONER_BLACK_VALID: 1,
  GXI_TONER_CYAN_VALID: 1,
  GXI_TONER_MAGENTA_VALID: 1,
  GXI_TONER_YELLOW_VALID: 1,
  GXI_IMAGING_BLACK_VALID: 1,
  GXI_IMAGING_CYAN_VALID: 1,
  GXI_IMAGING_MAGENTA_VALID: 1,
  GXI_IMAGING_YELLOW_VALID: 1,
  GXI_SUPPORT_PAPER_SETTING: 0
}