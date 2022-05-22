"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84806],{90373:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-04962294",path:"/devices/RTCGQ13LM.html",title:"Xiaomi RTCGQ13LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi RTCGQ13LM control via MQTT",description:"Integrate your Xiaomi RTCGQ13LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-02-28T13:58:01.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Adapter firmware",slug:"adapter-firmware",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Motion_sensitivity (enum)",slug:"motion-sensitivity-enum",children:[]},{level:3,title:"Detection_interval (numeric)",slug:"detection-interval-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/RTCGQ13LM.md",git:{updatedTime:1653249889e3}}},67718:(e,t,i)=>{i.r(t),i.d(t,{default:()=>G});var a=i(66252),l=i(71212);const n=(0,a._)("h1",{id:"xiaomi-rtcgq13lm",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#xiaomi-rtcgq13lm","aria-hidden":"true"},"#"),(0,a.Uk)(" Xiaomi RTCGQ13LM")],-1),r=(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])]),(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"RTCGQ13LM")]),(0,a._)("tr",null,[(0,a._)("td",null,"Vendor"),(0,a._)("td",null,"Xiaomi")]),(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Aqara high precision motion sensor")]),(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"occupancy, motion_sensitivity, detection_interval, temperature, battery, linkquality")]),(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/RTCGQ13LM.jpg",alt:"Xiaomi RTCGQ13LM"})])])])],-1),u=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),o=(0,a._)("h3",{id:"adapter-firmware",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#adapter-firmware","aria-hidden":"true"},"#"),(0,a.Uk)(" Adapter firmware")],-1),d=(0,a._)("p",null,"In order for this device to work, at least the following firmware is required on your adapter:",-1),s=(0,a.Uk)("CC2530/CC2531: "),c={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},h=(0,a._)("code",null,"20211115",-1),A=(0,a.Uk)("CC1352/CC2652: "),E={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},m=(0,a._)("code",null,"20211114",-1),p=(0,a.Uk)("Conbee II: "),I={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},f=(0,a._)("code",null,"0x26720700",-1),R=(0,a._)("p",null,[(0,a._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),b=(0,a._)("h3",{id:"pairing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,a.Uk)(" Pairing")],-1),g=(0,a._)("p",null,"Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn't work, try with a single short button press.",-1),k=(0,a._)("p",null,[(0,a._)("img",{src:l,alt:"RTCGQ13LM pairing"})],-1),U=(0,a._)("p",null,[(0,a._)("em",null,"Note: When you fail to pair a device, try replacing the battery, this could solve the problem.")],-1),Q=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),_=(0,a.Uk)("This device supports OTA updates, for more information see "),v=(0,a.Uk)("OTA updates"),y=(0,a.Uk)("."),w=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),B=(0,a.Uk)("How to use device type specific configuration"),T=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("code",null,"occupancy_timeout"),(0,a.Uk)(': Time in seconds after which occupancy is cleared after detecting it (default is "detection_interval" + 2 seconds). The value must be equal to or greater than "detection_interval", and it can also be a fraction. The value must be a number with a minimum value of '),(0,a._)("code",null,"0")])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("code",null,"no_occupancy_since"),(0,a.Uk)(": Sends a message the last time occupancy (occupancy: true) was detected. When setting this for example to [10, 60] a "),(0,a._)("code",null,'{"no_occupancy_since": 10}'),(0,a.Uk)(" will be send after 10 seconds and a "),(0,a._)("code",null,'{"no_occupancy_since": 60}'),(0,a.Uk)(" after 60 seconds. The value must be a list of number.")])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("code",null,"temperature_precision"),(0,a.Uk)(": Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of "),(0,a._)("code",null,"0"),(0,a.Uk)(" and with a with a maximum value of "),(0,a._)("code",null,"3")])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("code",null,"temperature_calibration"),(0,a.Uk)(": Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.")])])],-1),x=(0,a._)("h2",{id:"exposes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#exposes","aria-hidden":"true"},"#"),(0,a.Uk)(" Exposes")],-1),C=(0,a._)("h3",{id:"occupancy-binary",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#occupancy-binary","aria-hidden":"true"},"#"),(0,a.Uk)(" Occupancy (binary)")],-1),H=(0,a._)("p",null,[(0,a.Uk)("Indicates whether the device detected occupancy. Value can be found in the published state on the "),(0,a._)("code",null,"occupancy"),(0,a.Uk)(" property. It's not possible to read ("),(0,a._)("code",null,"/get"),(0,a.Uk)(") or write ("),(0,a._)("code",null,"/set"),(0,a.Uk)(") this value. If value equals "),(0,a._)("code",null,"true"),(0,a.Uk)(" occupancy is ON, if "),(0,a._)("code",null,"false"),(0,a.Uk)(" OFF.")],-1),P=(0,a._)("h3",{id:"motion-sensitivity-enum",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#motion-sensitivity-enum","aria-hidden":"true"},"#"),(0,a.Uk)(" Motion_sensitivity (enum)")],-1),Y=(0,a._)("p",null,[(0,a.Uk)("Value can be found in the published state on the "),(0,a._)("code",null,"motion_sensitivity"),(0,a.Uk)(" property. To read ("),(0,a._)("code",null,"/get"),(0,a.Uk)(") the value publish a message to topic "),(0,a._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,a.Uk)(" with payload "),(0,a._)("code",null,'{"motion_sensitivity": ""}'),(0,a.Uk)(". To write ("),(0,a._)("code",null,"/set"),(0,a.Uk)(") a value publish a message to topic "),(0,a._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set"),(0,a.Uk)(" with payload "),(0,a._)("code",null,'{"motion_sensitivity": NEW_VALUE}'),(0,a.Uk)(". The possible values are: "),(0,a._)("code",null,"low"),(0,a.Uk)(", "),(0,a._)("code",null,"medium"),(0,a.Uk)(", "),(0,a._)("code",null,"high"),(0,a.Uk)(".")],-1),D=(0,a._)("h3",{id:"detection-interval-numeric",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#detection-interval-numeric","aria-hidden":"true"},"#"),(0,a.Uk)(" Detection_interval (numeric)")],-1),N=(0,a._)("p",null,[(0,a.Uk)("Time interval for detecting actions. Value can be found in the published state on the "),(0,a._)("code",null,"detection_interval"),(0,a.Uk)(" property. To read ("),(0,a._)("code",null,"/get"),(0,a.Uk)(") the value publish a message to topic "),(0,a._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,a.Uk)(" with payload "),(0,a._)("code",null,'{"detection_interval": ""}'),(0,a.Uk)(". To write ("),(0,a._)("code",null,"/set"),(0,a.Uk)(") a value publish a message to topic "),(0,a._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set"),(0,a.Uk)(" with payload "),(0,a._)("code",null,'{"detection_interval": NEW_VALUE}'),(0,a.Uk)(". The minimal value is "),(0,a._)("code",null,"2"),(0,a.Uk)(" and the maximum value is "),(0,a._)("code",null,"65535"),(0,a.Uk)(". The unit of this value is "),(0,a._)("code",null,"s"),(0,a.Uk)(".")],-1),O=(0,a._)("h3",{id:"temperature-numeric",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#temperature-numeric","aria-hidden":"true"},"#"),(0,a.Uk)(" Temperature (numeric)")],-1),q=(0,a._)("p",null,[(0,a.Uk)("Measured temperature value. Value can be found in the published state on the "),(0,a._)("code",null,"temperature"),(0,a.Uk)(" property. It's not possible to read ("),(0,a._)("code",null,"/get"),(0,a.Uk)(") or write ("),(0,a._)("code",null,"/set"),(0,a.Uk)(") this value. The unit of this value is "),(0,a._)("code",null,"°C"),(0,a.Uk)(".")],-1),j=(0,a._)("h3",{id:"battery-numeric",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#battery-numeric","aria-hidden":"true"},"#"),(0,a.Uk)(" Battery (numeric)")],-1),M=(0,a._)("p",null,[(0,a.Uk)("Remaining battery in %. Value can be found in the published state on the "),(0,a._)("code",null,"battery"),(0,a.Uk)(" property. It's not possible to read ("),(0,a._)("code",null,"/get"),(0,a.Uk)(") or write ("),(0,a._)("code",null,"/set"),(0,a.Uk)(") this value. The minimal value is "),(0,a._)("code",null,"0"),(0,a.Uk)(" and the maximum value is "),(0,a._)("code",null,"100"),(0,a.Uk)(". The unit of this value is "),(0,a._)("code",null,"%"),(0,a.Uk)(".")],-1),F=(0,a._)("h3",{id:"linkquality-numeric",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#linkquality-numeric","aria-hidden":"true"},"#"),(0,a.Uk)(" Linkquality (numeric)")],-1),L=(0,a._)("p",null,[(0,a.Uk)("Link quality (signal strength). Value can be found in the published state on the "),(0,a._)("code",null,"linkquality"),(0,a.Uk)(" property. It's not possible to read ("),(0,a._)("code",null,"/get"),(0,a.Uk)(") or write ("),(0,a._)("code",null,"/set"),(0,a.Uk)(") this value. The minimal value is "),(0,a._)("code",null,"0"),(0,a.Uk)(" and the maximum value is "),(0,a._)("code",null,"255"),(0,a.Uk)(". The unit of this value is "),(0,a._)("code",null,"lqi"),(0,a.Uk)(".")],-1),z={},G=(0,i(83744).Z)(z,[["render",function(e,t){const i=(0,a.up)("OutboundLink"),l=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,r,u,o,d,(0,a._)("ul",null,[(0,a._)("li",null,[s,(0,a._)("a",c,[h,(0,a.Wm)(i)])]),(0,a._)("li",null,[A,(0,a._)("a",E,[m,(0,a.Wm)(i)])]),(0,a._)("li",null,[p,(0,a._)("a",I,[f,(0,a.Wm)(i)])])]),R,b,g,k,U,Q,(0,a._)("p",null,[_,(0,a.Wm)(l,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[v])),_:1}),y]),w,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(l,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[B])),_:1})])]),T,x,C,H,P,Y,D,N,O,q,j,M,F,L],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}},71212:e=>{e.exports="data:image/jpeg;base64,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"}}]);