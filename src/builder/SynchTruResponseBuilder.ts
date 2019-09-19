import { SynchtruResponse } from "../model/SynchtruModel";

export class SynchTruResponseBuilder {
  model: string;
  hostname: string;
  serialNumber: string;
  ipv4Addr: string;
  ipv6Addr: string;
  macAddress: string;
  adminEmail: string;
  adminName: string;
  adminPhone: string;
  blackTonerLevel: number;
  cyanTonerLevel: number;
  magentaTonerLevel: number;
  yellowTonerLevel: number;
  location: string;

  static aSynchTruResponse() {
    return new SynchTruResponseBuilder();
  }

  private constructor() {
    this.model = "A_MODEL_NAME";
    this.hostname = "AN_HOST_NAME";
    this.serialNumber = "A_SERIAL_NUM";
    this.ipv4Addr = "1.2.3.4";
    this.ipv6Addr = "";
    this.macAddress = "A_MAC_ADDRESS"
    this.adminEmail = "admin@email.com"
    this.adminName = "admin"
    this.adminPhone = "ADMIN_PHONE_NUMBER"
    this.blackTonerLevel = 28;
    this.cyanTonerLevel = 6;
    this.magentaTonerLevel = 6;
    this.yellowTonerLevel = 6;
    this.location = "";
  }

  withBlackTonerLevel(level: number): SynchTruResponseBuilder {
    this.blackTonerLevel = level;

    return this;
  }

  withMagentaTonerLevel(level: number): SynchTruResponseBuilder {
    this.magentaTonerLevel = level;

    return this;
  }

  withYellowTonerLevel(level: number): SynchTruResponseBuilder {
    this.yellowTonerLevel = level;

    return this;
  }

  withCyanTonerLevel(level: number): SynchTruResponseBuilder {
    this.cyanTonerLevel = level;

    return this;
  }

  build(): SynchtruResponse {
    return {
      status: {
        hrDeviceStatus: 2,
        status1: "",
        status2: "",
        status3: "",
        status4: ""
      },
      identity: {
        model_name: this.model,
        host_name: this.hostname,
        location: this.location,
        serial_num: this.serialNumber,
        ip_addr: this.ipv4Addr,
        ipv6_link_addr: this.ipv6Addr,
        mac_addr: this.macAddress,
        admin_email: this.adminEmail,
        admin_name: this.adminName,
        admin_phone: this.adminPhone,
        customer_support: ""
      },
      toner_black: {
        opt: 1,
        remaining: this.blackTonerLevel,
        cnt: 309,
        newError: ""
      },
      toner_cyan: {
        opt: 0,
        remaining: this.cyanTonerLevel,
        cnt: 0,
        newError: ""
      },
      toner_magenta: {
        opt: 0,
        remaining: this.magentaTonerLevel,
        cnt: 0,
        newError: ""
      },
      toner_yellow: {
        opt: 0,
        remaining: this.yellowTonerLevel,
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
  }
}