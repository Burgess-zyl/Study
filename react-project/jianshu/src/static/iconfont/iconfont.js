import { createGlobalStyle } from "styled-components";

const IconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1544689436505'); /* IE9*/
    src: url('iconfont.eot?t=1544689436505#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAWgAAsAAAAACDQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8n0pDY21hcAAAAYAAAABqAAABstMMncpnbHlmAAAB7AAAAa4AAAHYIMEhTWhlYWQAAAOcAAAALgAAADYTj7QiaGhlYQAAA8wAAAAcAAAAJAfeA4ZobXR4AAAD6AAAAA4AAAAUFAAAAGxvY2EAAAP4AAAADAAAAAwA6gFYbWF4cAAABAQAAAAfAAAAIAETADxuYW1lAAAEJAAAAUUAAAJtPlT+fXBvc3QAAAVsAAAAMQAAAELdecDdeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeib0IZG7438AQw9zAMBkozAiSAwDlyQxfeJztkcENgDAIRR9tNabx7BJ69uwK3cOTQzfdQqF4cAg/eQR+CAcABiAqm5JALgTTqa50P5K7nzi0z0wEQl3qWvdW7hu+9SvROQ/bKrojqDnya+75eLtk13N6vTp2+bo79p1WHMIDxCkYOwAAeJw1UE1LG1EUvfe9vPcIlknEzAyGjJiMM0kQkjDJzBSpOoIVQdyWohO/YFqc0pURXQ6UigsLXfUH9D/YTakfC/fqKr9B2m036uiLtVw4995zFudwgAA8fKSn5DcoUARAe1zwvK5lfPTRI5RXqnbH9xxdK5AvcfonjqL3OBRjTU37Xba/cbsZhpu3GyE5iKKBvMW6aV/FWoxD6bcwfNYBYOCTUDmQh7L0EWOoKihcobsz6Hfs5tNb0HS/gQNGJXcrjRY9PkySk3s2f/eEwT+K/Fpp9OYOj2mQJAG7P1n9/ul5B/8FyEi/B3pGAQTkYAKaAGWzWhYmtkeoXTW5oMxrOwaarsnNiu12ZrFjVoSuoFrQ2o43jeTs3WLafx1hbmv+A+OEiRj7rZmdl1iea/jxWjDVXK8Z40WrdX1NIa3jbN42R9JzVupdNL1W/Y3yYsl6y0qjasmxxmQHKDP16E/ZgQGg22BpXPAccs2Xh4K6p0kUnEhcyOJn/EuoYfmv+OROZvmIYmV4b1tc7e3+YLS9PEFOb9C16u4UyznZrwaqWUHXWThaSy9VXnwEXLJw/gAAeJxjYGRgYADhn9sN4vltvjJwszCAwA0LCxkE/T+XhYG5AcjlYGACiQIA+YUIVgAAeJxjYGRgYG7438AQw8IAAkCSkQEVsAIARwsCbnicY2FgYGBBwwABBAAVAAAAAAAAADQAbAC2AOx4nGNgZGBgYGUwYGBhAAEmIOYCQgaG/2A+AwAN3QFQAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgJWRiZGZkYWRlZGNgcnEkKW4IDOPyTGRvbI0NzE/KZOBAQBC2QXxAAAA') format('woff'),
    url('iconfont.ttf?t=1544689436505') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('iconfont.svg?t=1544689436505#iconfont') format('svg'); /* iOS 4.1- */
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