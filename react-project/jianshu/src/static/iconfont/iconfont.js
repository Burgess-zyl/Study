import { createGlobalStyle } from "styled-components";

const IconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1544598799870'); /* IE9*/
    src: url('./iconfont.eot?t=1544598799870#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAU4AAsAAAAAB6AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8n0goY21hcAAAAYAAAABeAAABnLO5G4xnbHlmAAAB4AAAAVkAAAFoR7FvhWhlYWQAAAM8AAAALwAAADYTjPAIaGhlYQAAA2wAAAAcAAAAJAfeA4VobXR4AAADiAAAAA4AAAAQEAAAAGxvY2EAAAOYAAAACgAAAAoA6AB+bWF4cAAAA6QAAAAeAAAAIAESADxuYW1lAAADxAAAAUUAAAJtPlT+fXBvc3QAAAUMAAAAKgAAADttse0geJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeiT0zY27438AQw9zAMBkozAiSAwDjoAxCeJztkEEOgDAIBAdbTWM8+4l6NH2QJ1/ONypQDz7CJUNgs+EAMAPJOIwMciO4LnMl/MQafqbZXqwm0F2rtt6/U0giUeKqeFIWfm3Rz3dL/rVBzHXg/9Y2YHoAiIkTBgAAeJwtjj1Lw1AYRt/33t57KUpTaZNgaaRtmrRFsCVpEhG1CiqCuIpDaj8gihGnVuroopOCkz/FxUEd3NWpv0F0dSlEI7gcHjjDc4AA/JzSR/IJKcgBoFkQPK0qCQ89dAnlpYrZ9FxLVbLkJoy+wiA4wqkQq3I0brPz7qTn+71J1ydXQfCn+6wdjWWshjgV3fn+vweARPzzQ58ogAAJylAHKOqVotDRzlCzonNBmWtbGuqOzvWS6TRb2NRLQk2hnFVsy11B8nS4HY03A5T6GyeMEyZCHDdWB4tYXF/wwoO1pXqnqhVyRuP9nUJUw1ba1DPRM8sPX+puo7aXmt4x9ll+Vs5bxlzchHHTkD7QC9AAVBMMhQsuIVe8eKRQdZWYgpOYW0m8xG9CNcNb5vODxO41xdLM6Fi8jc7uGbV3y+TxAx2j5iwxyUreaignBe0wf7Yavco89wulxFCyAAAAeJxjYGRgYADim9GRnvH8Nl8ZuFkYQOCG2TV+BP0/l4WBuQHI5WBgAokCABO9CWoAeJxjYGRgYG7438AQw8IAAkCSkQEVsAAARwoCbXicY2FgYGBBwgAAsAARAAAAAAAAADQAfgC0AAB4nGNgZGBgYGEwAGIQYAJiLiBkYPgP5jMAAA3CAU8AAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgIWRiZGZkYWRlYHJxJDJMZG9sjQ3MT8pk4EBACQIBCsAAA==') format('woff'),
    url('./iconfont.ttf?t=1544598799870') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1544598799870#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
export default IconFont