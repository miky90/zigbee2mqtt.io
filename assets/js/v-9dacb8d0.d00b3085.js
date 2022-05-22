"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[90211],{7506:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-9dacb8d0",path:"/devices/AV2010_21B.html",title:"SMaBiT (Bitron Video) AV2010/21B control via MQTT",lang:"en-US",frontmatter:{title:"SMaBiT (Bitron Video) AV2010/21B control via MQTT",description:"Integrate your SMaBiT (Bitron Video) AV2010/21B via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-09-30T19:53:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Contact (binary)",slug:"contact-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Tamper (binary)",slug:"tamper-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/AV2010_21B.md",git:{updatedTime:1653249889e3}}},58014:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});const i=(0,a(66252).uE)('<h1 id="smabit-bitron-video-av2010-21b" tabindex="-1"><a class="header-anchor" href="#smabit-bitron-video-av2010-21b" aria-hidden="true">#</a> SMaBiT (Bitron Video) AV2010/21B</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>AV2010/21B</td></tr><tr><td>Vendor</td><td>SMaBiT (Bitron Video)</td></tr><tr><td>Description</td><td>Magnetic contact sensor with additional input for wired sensors</td></tr><tr><td>Exposes</td><td>contact, battery_low, tamper, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/AV2010-21B.jpg" alt="SMaBiT (Bitron Video) AV2010/21B"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the function key on the top of the sensor for about 10 seconds until the red LED briefly lights up once. During the search, the LED lights up red once every 10 seconds. When the LED flashes 2 times, the device has successfully registered.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary" aria-hidden="true">#</a> Contact (binary)</h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),r={},d=(0,a(83744).Z)(r,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);