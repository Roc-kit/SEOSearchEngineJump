const seofavicons = {
    "ahrefs": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAkVJREFUaEPtmc9RWzEQhz85HLhBKoipAEqADkwF0EF8A06YS2yfoISkAoYK4g7iDmJXEB/hAAsrbM/Lw36S9ceOM08znvGMnqTft9q3u9IzbHkzW66f/x9Aesgmd8lcVhvZuQM1QOT21TtQu1DtQnUU2vI8EOnClcN9AkR0GK0BKixQ7wBsthqtdyDVDkiXJsIRO3zhmQMMe0Cz4P77gP5mrdhXGSeyRCHpcgy0MBwCRyVxSQNXMgBr5QZnCO2cgsv0SQCkz/W6hc9AogCkwz67/Jy6SVLX8J0sDqDHr02KV8hggKnbdHwtleu5cIAev0uhMIXGCTDCMOKFMYavrkmDAKRPC+HeNfmC/neBMEQY2/8NJrww5ImJ6aD985YtE0uPO3BbZ6pkgPADGJgrK9675QTQyKPJqqpNEE7NFQNvxaUHcwL8cSYrw7m5sJYPbjkB3NeJj3wu+/SqJBsFcEUHF4ytp4xNkpXNtc7Cu9EUllmmair82uMds1P8MwCrCp8ZIBsAwolPBAoVnh9Ak9UjJ8te5FjhsQC+ZcQI4cFmXm2f2EM4tr+/T2Cud3Vpf6gLaRnRCl414cAwgD5thNuEOoKnCgN4P8ioGxUP4sEiYgYGAeiC8o02jay7oDWUq94KywMzi70d5L9jOIux4IKxWr3eaAhOkTB9vlKuUlpXsc6Fzw3k8Qk32IWKSqTLOQZN/94XUoXxH4SvHaDgUsULLYUpA+mBRk9dQxoMeeah6pCzFhdK7P/Jp3O+A8lXTDzh1gO8AgqT5DHLyhfTAAAAAElFTkSuQmCC",
    "google": "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='48px' height='48px' viewBox='0 0 48 48' enable-background='new 0 0 48 48' xml:space='preserve'%3E%3Cpath fill='%23FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3Cpath fill='%23FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/%3E%3Cpath fill='%234CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/%3E%3Cpath fill='%231976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3C/svg%3E%0A",
    "whois": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABX1JREFUWEetl2tsFFUUx/9ntkvZmW15ichDYwANqJBgQZjZJgIhRtJIgg8SfEYkJqJUBdnZgpGVJt2dhWBAfCT4wReaFFFJEIKG2GB31hKBCgkYQsAHoBKphe7MwrIzx86yrdt9kXY5H+89939+98y9554hDNAMTW4CqAFAJ8D/AsI5gI8R6AiRfTRhJ9uHBw5evJ48Xc+h0DwzyIwoRwDcU2J9ioEYgG8EWNtEte1MId8+ABysEQ2x8k6vX28vBdYVUuYKAvb1A94CsJcJm7x+/dvsdb0AHeGaIZVU2coMzRvQPy0lboR9X4J4YT8A/nclWiP5o009A70Ahqas7R4MWhZPrl4d+6WYeCI063ZbEE4CcA0IAIBtC3OqGlpbnPVpAA5CMD3KKQBDxYQ+nIKwi4mbEUVjhn+gwdPrmL6SAtGHewGMsFIHwi4ibhH9sTnFxHmj7DGv0h8ARpQFACQtKzWmevWBC+kMGJr8IUDPECEi+nW1mLgR8S0F89Yyg2eW0wuSGn2fMlfqLIDRRLxI9Me2FwXQlEMApt0AgPMEahTV6BaKr585lWzXz46oyxYmDG5odc5CnpmRWT5mobX84PzRZY9dP6K+7VL6DGSltUP06zcRgQsD+LYx8+PlADDwuZTQn8w+5GRo8tsAveQUCknVHywUIB6ZcQux+zcAg8oAuJhy8/ghK2Id2RpkhH3fgXgeGE1SQF9TKIARUV4Ho7GM4CCiDaI/uipXw6npx5kxCeCFkhr7OteBg7MrTE/yNIBx5QDYsO+qUn88ngdgaMo/zr2miorbxJX7nTvex8yI8ggzvignOAP7vap+f562NnMcmZpyiUGGpEZHFz588vfMNLtMgKe9qv5J/ubkl8nQFAPE+yR/bEGuQ1fYd7dAfLSnZOelD+hiQgQ2DhNQxcQ+gJ4AMCzL94Lo5ltpRSyRvb5LmzVZYFfAATABaJKqv5kbwNCUdwAsK7H7FyVVfzd7vjNUO8ztsveCMePaOIckNba6gHYzwCcdgL9AtETyR3dnO/H6qVLC9v7JQFURgFTKzaNyr5Xja4SVzSAsB3CVYI3PbUbiYXkKETk9x3IyIvJPfNWu865p+zs7UDwiP0hMe4rtnoB9oqrPy52/sHlm9eCE6wSAUU7h8ap6XvEyNGUXgDqwsIBMTY6Iaizvec3q+QoyMFDwYMU1ZRMB9QBSlsVTcnsLMywrTBR1RC3QJDJC8jSpIXY4/xvJOwBKv9kFrFN085jcg2WEamsg2G2ZZmWrpOrP9/mszY+5zNNnDwC4F0BcTOhDijalhqb8AKC2YHiitZI/ui5P/NczbWCqAWACdIekRs/1+ayaspKADdfGKCqp0dqiAHFNaSEgr3h034rzJmjiSDXalS1uako9A5sy4o2SGn0je/5ySJ5oCWgHSMrcji2SGlteKgNO47E0LwOMZVJAf69P8I3yWE7SMRCqARwSE50yBY8le3x48/xKM3FRz6T+2v4Jj4p+fUfxDESUB4ixty8A7xH9sbrcJ9vUlI8ZeArA74JQMduzar/zdvRagXqSSg4aNHLYqy2dRQHSndJ6eSeYHsooHbrCV+YW+ttxHjQwzpILz3le051nu9dMTX6FQW/lZHK3pOp16UwUPuSZr+Q0oUkEmGiobaXWOU1kKf/cOSMiLwHTBzlxUszCdG+gNd2FDejX7HoQTva635hVRAgBELL8k8z8rDcQ+6xn7IYDXA7VjrcEawtA87MCxwHeYVkI5xamfgMYmm96d6FpZHAzUtZup4RfarpvhMvl9jF4MQFO8XJat04ALUTc7DGTOyl40Hn08qxfAImwr9YmXgzCWDBuBnG6R2SmODF1EPEpJj4By3VQnDC6nRZtd35KS9p/mKVKVRR2OJ0AAAAASUVORK5CYII=",
    "similarsites": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAa5JREFUOE+Fk70vBGEQxp9ZilNcoRFXiYb11VgUEsnpFBKNUilhHZ0VH7UQp1y3ErV/gEbnQkiE0/i6vUJQEBqFyCnEyKx7N6+9O95q39lnfjM78ywhcpLJ/Vg2O/ihwpOz3GAQuo1a3LkrlI/qSQUk8e3Rv8sVJhtVLOXwIoBlLemdgdFMmvZULARYrV4RhNtc3u6QlwLs6E0WoxXlTsCqm6aF0jNgtXi7IAyDcK0AM3Pc98U4qQQIEgm2u0ab1NPmdfIXLpQw59thVymHuRpA4len2TqyWr0tAONKaABjp769Lff/ugCwRJbpXYHRrleKJ8w6tYnpBTb5EzcVO2EcSwcyqFhE8BFPmPUKUhroPYCGiO5dANW/s8Zoyl1PPGhrfY5ABJC5Bai56rA0iJiqhiAQdfyyIZaBmJ5/mWuWj0DoL+k2qLslM0BEB3+tiwx0nd3Yl6KZdniFgfnAC7VoC3ZeaRM6UAekHHYBpIiw467RSAAI/oOn/GuFbQSciLlkBq8baTJDK6tqoaW18nr1KYeHjB8LjyhJaFu9ZZmL3M8LU4d6XLawuU4veuwbWC2lMAaSUWkAAAAASUVORK5CYII=",
    "similarweb": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABG9JREFUWEell3+IVFUUxz9nZtPVRKECY2c2FTSSUDLbWVMDlaTMIJrZRUFEitJ2djMTjf4oCv8pycC03U2jhEKEZnYVjFbKymJznR0Xy7JMF5F8u2BCpun+cuadfE8d5719szuzc/57753zvZ973z3n3CsUYVrPQwjrERai3AtcAv4EfsBkt9RxYjh5GcohEHr2bhHfhpL+9OazP+/7N9tXG6gFtgIlOTRMYDd+3pA1/JVrnJwAgVD1UtBPEG3pSjQ95xi8noUI3wJDTuBmzGXgBYkS84LwFAiGqjeCvgv4QMJGe2yva/atwLzhltf1fbNEed0dMwigvKLqTRU23XJUMcu7Es1G5nkb4ynh4g24Ak15X2rZkB3lAAhUVq8U1c+yHSam7xrV0bHzWgZgOzPwc7zAobPdX5WovXdsywCUzY484PNLBzDWIe6XsUZbrDcLYAp+zhQBMICPkLzELw6AYKj6O9CFbmEzrdO7O5pOuvaABTClCIgj1DBXBLVXoKwi/LhPfN94CarImq5EbKcrC15EcLwrGEYISw17bYBARdXXIiz2FpEjRnvsUQeAIjTyFfBkwQPfDmiVKI9J+bzlZXotdW6oXW2qubg72XzQAbGDCaQ4iPDIiCH8TJXyykitqnw4tIieMtMDs7o79vcMgkizD1gwIghlnQQqqvaIsDwPgT1Ge3wFoA6IbYymhEbAUS3z0LNyMC7BUNVvwIN5BShbjGR8o+dmbWAdsAXw56VlOSknLYD/rgeOyzdIlK3nkvH17pWw9T7iKUy75jtrSW7xqxaAY0nzAhGa+8fIqguHYlfc/lrPXMTOkAn5aFkAVpUrzcfZ8e/RP0R4xkg0nR4E0cgilBZg1HC6FoDVaALDOeb4flHFjHQlmr/3gKhD2T6M7t8WwGHAUWgKhOnDJGwcjVszzpjeKFbWmWFQeb/tRJsEKyJbEXmlwEHd7j2mqfO7jzYdc0A0MBs4mlNbaJBAqKpa4IsiAawcOFX6T8/Mzs6WfhdEGzDHU1+JyMSZK++8o7S3GxhfNITqaiPZ9LEDoJG3rpeutz20LzOGiXYzClZEdiCyumgAOGC0x5c4AOoJIzR5aDdKlKgNMGnOsulpM/1rQVXMm/a00R6/37UCC1DcWZJCmCY1nM2ciAKhSIMgNUWuwjGjPf6wC+BplP0u3fckymvWuwzA1MoV4/vM/tbryzVjpBCq7OpKxp93AaxF+SDr3Sn8zJI12J3VdSgNB0V9PwH3jQhCZYmRjB1wZcEeyHTbSwjzpQarAdo26Fg+ec7yySkz9WXeHfKWknLISMYXZTcp3UUpvZy/mWFXMFkqdfyYDeh5MbmZmu8A1p7IdfXK1jmBX54w2mJdrtlbZ4RPwb6ahSWKdep22JBXq0mh6ikp0VpRllnZ6vFbelRoHMPoTZ2J3dYVLGNazziE34HDpHhZ1nLB67fmc7ez44KVkWlqMsuH3KPCgCJnUn2lifPHP7/qJawNrMLEkDq7H+S0vAFGtCnzCPofsYSA2vJZvAUAAAAASUVORK5CYII=",
};

const searchEngineJumpPlusEngines = {
    web: [
        {
            name: "百度",
            url: "https://www.baidu.com/s?wd=%s&ie=utf-8",
            favicon:
                "data:image/svg+xml,%3Csvg t='1666880462710' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='36406' width='32' height='32'%3E%3Cpath d='M226.522 536.053c96.993-20.839 83.792-136.761 80.878-162.089-4.758-39.065-50.691-107.346-113.075-101.952-78.499 7.036-89.957 120.445-89.957 120.445C93.748 444.857 129.764 556.857 226.522 536.053zM329.512 737.61c-2.848 8.175-9.18 29.014-3.686 47.173 10.822 40.707 46.168 42.55 46.168 42.55l50.792 0L422.786 703.169 368.41 703.169C343.952 710.473 332.159 729.468 329.512 737.61zM406.537 341.666c53.572 0 96.859-61.646 96.859-137.9 0-76.12-43.287-137.767-96.859-137.767-53.472 0-96.892 61.646-96.892 137.767C309.645 280.019 353.065 341.666 406.537 341.666zM637.241 350.779c71.598 9.281 117.632-67.141 126.777-125.035 9.349-57.827-36.854-125.036-87.544-136.561-50.791-11.659-114.213 69.688-119.976 122.757C549.597 276.803 565.779 341.566 637.241 350.779zM812.666 691.174c0 0-110.761-85.701-175.425-178.305-87.645-136.593-212.177-81.011-253.822-11.558-41.478 69.452-106.106 113.375-115.286 125-9.314 11.458-133.813 78.666-106.173 201.423 27.64 122.69 124.7 120.345 124.7 120.345s71.53 7.036 154.519-11.524c83.021-18.428 154.484 4.59 154.484 4.59s193.919 64.929 246.988-60.072C895.655 756.037 812.666 691.174 812.666 691.174zM480.881 877.253 354.807 877.253c-54.443-10.855-76.12-48.044-78.867-54.343-2.68-6.433-18.125-36.317-9.951-87.109 23.52-76.12 90.627-81.614 90.627-81.614l67.107 0 0-82.485 57.157 0.871L480.88 877.253zM715.674 876.382l-145.07 0c-56.219-14.508-58.866-54.444-58.866-54.444L511.738 661.49l58.866-0.938 0 144.199c3.586 15.345 22.682 18.159 22.682 18.159l59.771 0L653.057 661.49l62.618 0L715.675 876.382zM921.051 448.006c0-27.708-23.018-111.13-108.385-111.13-85.501 0-96.925 78.732-96.925 134.382 0 53.136 4.489 127.313 110.695 124.935C932.677 593.846 921.051 475.881 921.051 448.006z' p-id='36407' fill='%23008bdd'%3E%3C/path%3E%3C/svg%3E",
        },
        {
            name: "Google",
            url: "https://www.google.com/search?q=%s&ie=utf-8&oe=utf-8",
            favicon:
                "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='48px' height='48px' viewBox='0 0 48 48' enable-background='new 0 0 48 48' xml:space='preserve'%3E%3Cpath fill='%23FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3Cpath fill='%23FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/%3E%3Cpath fill='%234CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/%3E%3Cpath fill='%231976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3C/svg%3E%0A",
            gbk: false,
        },
        {
            name: "必应",
            url: "https://www.bing.com/search?q=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==",
        },
        {
            name: "360",
            url: "https://www.so.com/s?ie=utf-8&q=%s",
            favicon:
                "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB60lEQVR4nIWTvWtTURTAf+e+GpPWRFptmigIDhWELo5+DKLCMxZEJfVjEhTqok4O/geik2MdOuhUm4ogpTS6iNQoRV3sIOqQgpiX2NKEprH58B2HvMQEUnO3ezi/3/m4XKHD2fvywrCr1oirbvWPuh9XYs8znfIApPUSmR97KHAbaY8rVIBxx0487iz4ML4tsrrmCAxsVckTpRw7cbQ1ZgCiq2vLDViVSatAb8ZOSMZOiEttCFj0qh2Jzo8l2jqIJOM3BJmowxJ3Tk8/61Q9koxPCnINwHXN/mzsaRrACDzwcl5vBQM49sx1VDcARNxHLSNIqG51b/5vfgAVuV/vm+NtOwAI6sb3rgKVhTqP75+gpvTlK2SswM5ughoa9a9XQdGmYKK0pF9CKZYqi7e6CT5XF+5+63vLlcKP5UZMirODUz1GLgFsL2pQLv4qdoLLc7sPKeYTQEnN1YFR5wmA6DS+8o5wuT6jbmLMwUAsm26Ff8+GT4nhFYBCPnAm19/sAKD0InzY9JBqEspPRd8g+FE5IULIg93NcnmXz+c7aYnMqOqUAeg9m3unRofVe2eEPSJyWZBzDRjVtN+SUP/5Qt4S2efVP9D2aQBKc4PHBO6IyohCVeA9uPf8oytfW/PWk0PhoJ3NdVt81/MXwby4bACYqGIAAAAASUVORK5CYII=",
        },
        {
            name: "yahoo",
            url: "https://search.yahoo.com/search;?p=%s",
            favicon:
                "data:image/svg+xml,%3Csvg t='1666872979419' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='13466' width='32' height='32'%3E%3Cpath d='M513.216 69.568C332.224 69.568 161.216 45.76 0 0v1024c161.408-45.824 332.416-69.632 513.216-69.632 178.816 0 349.376 23.232 510.784 69.632V0c-161.408 46.4-331.776 69.568-510.784 69.568z m283.584 87.424l-6.208 9.792c-5.824 9.216-11.008 17.024-18.176 28.032-9.6 14.4-27.584 43.008-49.216 79.808-6.016 10.176-13.376 22.4-20.992 35.584l-44.032 74.368-16.384 28.608-43.392 75.584c-14.592 25.792-28.992 51.2-43.392 76.416v25.408c0 35.2 0.768 73.6 1.984 107.776 0.576 15.616 1.216 43.392 1.984 72.768 0.768 35.008 1.6 71.232 2.624 89.6l0.192 5.632v0.576l-6.016-1.6-6.976-1.792a197.952 197.952 0 0 0-22.592-3.584 172.224 172.224 0 0 0-28.416 0 195.712 195.712 0 0 0-29.568 5.376l-6.016 1.6v-0.576l0.192-5.632c0.832-18.176 1.792-54.592 2.624-89.6 0.576-29.376 1.408-57.216 1.984-72.768a2721.92 2721.92 0 0 0 1.984-107.776v-25.408L425.6 488.768c-14.208-25.024-28.992-50.624-43.2-75.584-5.632-9.6-11.008-19.2-16.384-28.608-12.8-22.208-29.376-49.984-44.032-74.368a2038.784 2038.784 0 0 1-20.992-35.584 1986.112 1986.112 0 0 0-49.216-79.808c-7.168-11.008-12.416-18.816-18.176-28.032l-6.208-9.792 11.2 3.2c14.208 4.032 28.8 6.016 44.416 6.016s30.592-1.984 44.608-6.016l3.392-1.024 1.792 3.008c27.584 49.792 101.824 171.776 146.176 244.8 15.168 25.216 27.392 44.992 33.408 55.168v-0.192 0.192l33.408-55.168c44.416-72.832 118.592-194.816 146.176-244.8l1.792-3.008 3.392 1.024c14.016 4.032 28.992 6.016 44.608 6.016s30.208-1.984 44.416-6.016l10.624-3.2z' p-id='13467' fill='%234C07A2'%3E%3C/path%3E%3C/svg%3E",
        },
        {
            name: "搜狗",
            url: "https://www.sogou.com/web?query=%s",
            favicon:
                "data:image/svg+xml,%3Csvg t='1666872860655' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='11496' width='32' height='32'%3E%3Cpath d='M716.8 0c169.664 0 307.2 137.536 307.2 307.2v409.6c0 169.664-137.536 307.2-307.2 307.2H307.2C137.536 1024 0 886.464 0 716.8V307.2C0 137.536 137.536 0 307.2 0h409.6z m91.904 305.536c-18.304-22.016-176.1792-92.8384-333.8496-87.6672-157.6704 5.1712-277.568 84.3904-277.568 155.6864 0 71.3088 22.5408 161.3824 277.568 192.5632 221.4912 30.336 114.3424 113.8944 0 113.8944s-180.0832-41.1776-228.8256-41.1776c-48.7424 0-81.856 42.3808-21.2224 96.5888 55.36 49.4976 158.6304 62.1056 252.8512 69.568C571.8784 812.4544 832 794.88 832 638.8352c0-152.9088-205.8624-196.3776-294.5024-206.0416-88.6272-9.6768-131.1232-44.0064-131.1232-59.2384 0-15.5264 37.5552-54.0544 123.2512-44.096 85.696 9.9584 182.6304 44.096 221.696 44.096 39.0784 0 75.6992-46.0032 57.3824-68.0192z' fill='%23FF7D2A' p-id='11497'%3E%3C/path%3E%3C/svg%3E",
        },
        {
            name: "Startpage",
            url: "https://www.startpage.com/sp/search$post$query",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA9ElEQVR4nO2WTUoDQRBGX5txIMRs/EFBAm49iEfxBN5J8AAeZwwkgmTR6e6ZHsNMDO2iFkEyibqQcVG1+aq74KvXteky9w8p0WMc9dlcARRAARRAARTgXwBk+z5jYyA/3p7zvDv/Ltp2N2/XoilBNj4Rw6sLuDyXwuRa9OxUdDz6ajoc/hwAYLUSrertnV2KmpT6XUiyvzBtGplxjPLksooA+FAB4HzZDdA0a2Ksmb2+4XzJYmFxPlBM51jr8aHCLgPOBQDqd5ntx2ZzECgbDPbWzOPTcyqmM5wvKV7mOw26zA8Z/jbMze2dLqUKoAAKoAC9xic+GmK9S0OJvAAAAABJRU5ErkJggg==",
        },
        {
            name: "Yandex",
            url: "https://yandex.com/search/?text=%s",
            favicon:
                "data:image/svg+xml,%3Csvg t='1666872628734' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='10516' width='200' height='200'%3E%3Cpath d='M451 1024V691.8L229 96h111.6l163.6 459.4L692.4 0h102.6L553.6 695.6V1024h-102.6z' p-id='10517' fill='%23FC401D'%3E%3C/path%3E%3C/svg%3E",
        },
        {
            name: "DDG",
            url: "https://duckduckgo.com/?q=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADiElEQVQ4jXWTfVDTBRjHn+uyi8KAbWz7/TbeNzeUeNkLCljGS3hrspDUsC7vqivz5cI/OtQ7vSxNrpvdkQx0k10M5FYgztECgfOoM7kurs6IFx1ja7xsgMiLAySDffvDtLrs8/fz+T7PH8+X6BFIQymxOGb1WyWy8COH13LL9svCSgtEoTt4RMyj5h/CIRKfSImsMKu4NrOKZ6vZwDafz2Tbajaw9ur1wibzemHj+7Lwo0S06j9yYtgqRX0m216lFDS0FCR3Obcl3/FvFmJCFwt/0Rr0aOPGrVlsuymduVShEljDiCL+3hxCUbWZTLtBwfuqXyeZCThqsTTUj0BrPUZ2psGTE4mxQilmt8twLT/WVaUSXvgsjW8hoseJiOhYUuTpSqWw8YYmPjC6JQ5TtXqsLAYAAMu3fLj9eSk8eQw8OimmXpGjMzfWaU5nv94RvfodkoQ+se6cmm2+tDGqe1Ijxm+HXsd4IIi5+WUAQBDA6MRdePdq4c4Xw12wBlNFifginW0tTxN8Sa9Gh+02qlh7v0ayOJTNh8d4Ev7AMq4P+BAM3g/4rm8KvdVn4H6exWCOHMMaOTqzY1wGJXORDkg5H1ermZYRnQyubCEG9R/Av7CCsnOd+P3eCgCg68YCbnZ0YGyXCLf0AowfjML1PMm8UcHaqVTOO1WjFnWMFMjgyhWjZ48OC3/cPx9YRnD6POArAoZSsfT9k7jTEIHR/THoyZXerVYzLfReQvjRs0qRw7NFBmd+HH4pTMXk6Mhf/jTg4WDGRBjex4f33Th43ojHoEaG7nzJXKWSsdHLwmd2VSmE9h9flMwNaqT4NSca3mudeMCs4xDGj4fgdiUfc1YOJssF8OpkcGTF9FUomIvEIRIb0li7RSX+dqxAjt6NAgxYDA8Dpq116E+JhHdzPJxaKfpyZBjWymFQsPZPkvgWIiLancA9Up7C2K5sivd6XxCh98MS+JYmMDzvxqJ7AN2FctSVKtC9dS18LyWiXh3dZVKK257jPaV98IxPn0oWNpYlCera1cxN/55itLpt2H45A3uvbMObjiy89pMWP7ydioZk0dXyFNZWIuGW/asLoUR8fZLQenod325MlzsuXLVMHnMeRIXrLC67G4OHP8roPZ4hajI9y7YdSOB9+n+FfKw4KmLfSUlEbdPOvJ9dJv3sUnMTZmqM9yypsd+ckHLNm7ghW/8p/Alp3+8i87OHIgAAAABJRU5ErkJggg==",
        },
    ],
    image: [
        {
            name: "百度图片",
            url: "https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%s",
            favicon:
                "data:image/svg+xml,%3Csvg t='1666880462710' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='36406' width='32' height='32'%3E%3Cpath d='M226.522 536.053c96.993-20.839 83.792-136.761 80.878-162.089-4.758-39.065-50.691-107.346-113.075-101.952-78.499 7.036-89.957 120.445-89.957 120.445C93.748 444.857 129.764 556.857 226.522 536.053zM329.512 737.61c-2.848 8.175-9.18 29.014-3.686 47.173 10.822 40.707 46.168 42.55 46.168 42.55l50.792 0L422.786 703.169 368.41 703.169C343.952 710.473 332.159 729.468 329.512 737.61zM406.537 341.666c53.572 0 96.859-61.646 96.859-137.9 0-76.12-43.287-137.767-96.859-137.767-53.472 0-96.892 61.646-96.892 137.767C309.645 280.019 353.065 341.666 406.537 341.666zM637.241 350.779c71.598 9.281 117.632-67.141 126.777-125.035 9.349-57.827-36.854-125.036-87.544-136.561-50.791-11.659-114.213 69.688-119.976 122.757C549.597 276.803 565.779 341.566 637.241 350.779zM812.666 691.174c0 0-110.761-85.701-175.425-178.305-87.645-136.593-212.177-81.011-253.822-11.558-41.478 69.452-106.106 113.375-115.286 125-9.314 11.458-133.813 78.666-106.173 201.423 27.64 122.69 124.7 120.345 124.7 120.345s71.53 7.036 154.519-11.524c83.021-18.428 154.484 4.59 154.484 4.59s193.919 64.929 246.988-60.072C895.655 756.037 812.666 691.174 812.666 691.174zM480.881 877.253 354.807 877.253c-54.443-10.855-76.12-48.044-78.867-54.343-2.68-6.433-18.125-36.317-9.951-87.109 23.52-76.12 90.627-81.614 90.627-81.614l67.107 0 0-82.485 57.157 0.871L480.88 877.253zM715.674 876.382l-145.07 0c-56.219-14.508-58.866-54.444-58.866-54.444L511.738 661.49l58.866-0.938 0 144.199c3.586 15.345 22.682 18.159 22.682 18.159l59.771 0L653.057 661.49l62.618 0L715.675 876.382zM921.051 448.006c0-27.708-23.018-111.13-108.385-111.13-85.501 0-96.925 78.732-96.925 134.382 0 53.136 4.489 127.313 110.695 124.935C932.677 593.846 921.051 475.881 921.051 448.006z' p-id='36407' fill='%23008bdd'%3E%3C/path%3E%3C/svg%3E",
        },
        {
            name: "谷歌图片",
            url: "https://www.google.com/search?q=%s&tbm=isch",
            favicon:
                "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='48px' height='48px' viewBox='0 0 48 48' enable-background='new 0 0 48 48' xml:space='preserve'%3E%3Cpath fill='%23FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3Cpath fill='%23FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/%3E%3Cpath fill='%234CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/%3E%3Cpath fill='%231976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3C/svg%3E%0A",
        },
        {
            name: "必应图片",
            url: "https://www.bing.com/images/search?q=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==",
        },
        {
            name: "pixiv",
            url: "https://www.pixiv.net/search.php?word=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACaElEQVQ4jY2TS0iUYRSGjwupXYsIAqFdDl13tclNd6WgZVQULZrB6ddsbhA1FwkyNQOjCMz805nxMiM6ajq/OkjZxQElLS0sK6NQI7QkCCrTnhbfmBMatXj54PDxfO97zvlERERM245IlqbLXut/StNlj7VM0kzbRdZlHBVfJ+LtQDzGgtwGci6KuKN/1ueVH0Nc9bMi+3KD4u1AnGHEHkK0IHIyiNhDLD/TQIozrGpaEHGE1D1nGHGGEF8nIpnZt8QdRaxBUh0hDvl70HtHaR4ao/XZBLHn72kcHONwoAc5XYucqkFcCYjHQGSHRRdXC8eCcQbHp3kwOsnxQBxTQRurPBHSL7Ria3jE568zdL/6wGp3REHmASv3a3rkxRTfZ+cAWHsxipyoVK/Z69RpriK9oI0fcz/pH/vEMkdIxfUYSHlFhd40Mo29aQCATZc6kNyapKxhZdlchaPlMQCW+j7EGkg0s+SqnlZ8F0u4D4DNJUsAnGEkt4b1RQYAxvAEolWrCaVmaXqKsxlngv5XQF4taedvA9D39iOSV6sAssuiiy2C618ArZqtpTEA6p+8U2N1RxHZa9XF3vQbsKG4fTHAFkLMVfj73gCQVd6tIniMxYAtpTE1BWtAKduP5FTjbR8C4Nr9l0hOddIeJAD2ZjWFh6OTlPe8xmcMYWse4HLXMIPj00x9+YYt0q/c2euSAJnZlckOdl6/w4GybrztT7lyb4TCrmEO+uOsONuoHCWvswJoleJsxZFwYCoyEHPVQgRrQOW11S1ubH4MkTUbd4tWM1MYnwAg42Yv4mpZ+gcmyxdDrDcmfgF4QGAxnLBCrgAAAABJRU5ErkJggg==",
            blank: true,
        },
        {
            name: "flickr",
            url: "https://www.flickr.com/search/?q=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVQ4jWNgGAUIIKBqwKCfUMSgGZXJwCklhy6twSCoW8BpUZTFaZIjz8CviCprXtbFkHX3PxynXPrGoBIQC5Ou57Fv/C/Z+B+Gf4jV/szgMs6EyMq7BqJoRjaEQ1zRmUXRFVkzsiEaDIK6DAwuE1ZgNSDr7n8Gvbj8Wfy+c7AZ8F+y8X8tl30dA4PrlNU4DdBPKFrCH7QUlwGNPE4tDAzqoclYNaff+MMgoGoQwaYdhcsAGxY5G0g4eExZh2GAUVY1LBCX8wevQNfcyevShRoTim4hDHZNMxls6yczSJjao0ejP5ta4Axe35mT+DwnO7MoupKfXoYfAABPvsL2GuU3QwAAAABJRU5ErkJggg==",
            blank: true,
        },
        {
            name: "Vector Illustrations",
            url: "https://storyset.com/search?q=%s",
            favicon: "https://www.google.com/s2/favicons?domain=storyset.com",
            blank: true,
        },
        {
            name: "Pinterest",
            url: "https://www.pinterest.com/search/pins/?q=%s&rs=typed&term_meta",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACD0lEQVR4nO1WsW4UMRB9sxsECAmlpbrbRKwpKE4nk0i0/AQSogGlSInID/ABKegoEimioCC/kJYiySKCkE7aC8rtUdKgSClQyHlSBN95N/batyQVN5U9nnnvzazXNjCz/92oSVKWiPcAnlfcR3KQL16rgCwRHBKn1Ki7NPz+5coEhBJXTQ5yL350XeShubUKnQDMZ7Lo3zBdH4F4IRFntvC6TjgXsnb6B0Rz04CNcy3CXXluARWQW7fjmw97vVPXesSq0y0OvzpFUNySR70fVR7rHthPxK+qT5NnbbFhq1BRdGD6L1XMo6GNyyqAgHlzrsE+L6RPQHhpy9GWJWL8+7HCal2sU0DJmD9MhrRzMcCxHOTk+K4dPXg0zN+VxLXFrldAlqRb5lwW/WcAkLXSBxNfPj8OUPzKV8PYCEteAcz01Joc4a0dlN4EC7DCVvGA39ZIxje7ANy9UgEAts3Jbut+BwBk0V/7F6JgAbLIV8x5HEWTXQ1+7QM0N+Z+kp6UFhl7XgE20/83gdZNv+6Oywh0pySuyJeDBDDjp0vESMX3tG95eHgwyeFTs/rQSyz4KNYWchfsLYrHkcKnMtMURzFwUVEdietIzhLBl8gB2MiBBtex7sA074S6rtVuwmqiryvTknsFWADWnYENyIMEaCA5yIn+/h2+9is16oaQA02f5e10E0QvKu5Gz/KZzewcjEjYbJKZwQoAAAAASUVORK5CYII=",
            blank: true,
        },
        {
            name: "Yandex",
            url: "https://yandex.com/images/search?from=tabbar&text=%s",
            favicon:
                "data:image/svg+xml,%3Csvg t='1666872628734' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='10516' width='200' height='200'%3E%3Cpath d='M451 1024V691.8L229 96h111.6l163.6 459.4L692.4 0h102.6L553.6 695.6V1024h-102.6z' p-id='10517' fill='%23FC401D'%3E%3C/path%3E%3C/svg%3E",
            blank: true,
        },
    ],
    "Keyword Analysis": [
        {
            name: "Keyword Generator",
            url: "https://ahrefs.com/keyword-generator/?country=us&input=%s",
            favicon: seofavicons["ahrefs"],
            blank: true,
        },
        {
            name: "Keyword Difficulty",
            url: "https://ahrefs.com/keyword-difficulty/?country=us&input=%s",
            favicon: seofavicons["ahrefs"],
            blank: true,
        },
        {
            name: "Google Trends",
            url: "https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=%s&hl=en-US",
            favicon: seofavicons["google"],
            blank: true,
        },
        {
            name: "Keyword Rank",
            url: "https://ahrefs.com/keyword-rank-checker/?country=us&domain=%currentUrl%&input=%s",
            favicon: seofavicons["ahrefs"],
            blank: true,
        },
        {
            name: "Semrush Keyword Magic Tool",
            url: "https://www.semrush.com/analytics/keywordmagic/?q=%s&db=us",
            favicon: "https://www.google.com/s2/favicons?domain=www.semrush.com",
            blank: true,
        },
        {
            name: "Semrush Keyword Overview",
            url: "https://www.semrush.com/analytics/keywordoverview/?q=%s&db=us",
            favicon: "https://www.google.com/s2/favicons?domain=www.semrush.com",
            blank: true,
        },
        {
            name: "SERP Checker",
            url: "https://ahrefs.com/serp-checker/?country=us&input=%s",
            favicon: seofavicons["ahrefs"],
            blank: true,
        },
    ],
    "Website Analysis": [
        {
            name: "Traffic - Website",
            url: "https://ahrefs.com/traffic-checker/?input=%currentDomain%&mode=subdomains",
            favicon: seofavicons["ahrefs"],
            blank: true,
        },
        {
            name: "Traffic - URL",
            url: "https://ahrefs.com/traffic-checker/?input=%currentUrl%&mode=exact",
            favicon: seofavicons["ahrefs"],
            blank: true,
        },
        {
            name: "Backlink - Website",
            url: "https://ahrefs.com/backlink-checker/?input=%currentDomain%&mode=subdomains",
            favicon: seofavicons["ahrefs"],
            blank: true,
        },
        {
            name: "Backlink - URL",
            url: "https://ahrefs.com/backlink-checker/?input=%currentUrl%&mode=exact",
            favicon: seofavicons["ahrefs"],
            blank: true,
        },
        {
            name: "Similarsites",
            url: "https://www.similarsites.com/site/%currentDomain%/",
            favicon: seofavicons["similarsites"],
            blank: true,
        },
        {
            name: "Similarweb",
            url: "https://www.similarweb.com/zh/website/%currentDomain%/competitors/",
            favicon: seofavicons["similarweb"],
            blank: true,
        },
        {
            name: "Broken Link - Website",
            url: "https://ahrefs.com/broken-link-checker/?input=%currentDomain%&mode=subdomains",
            favicon: seofavicons["ahrefs"],
            blank: true,
        },
        {
            name: "Broken Link - URL",
            url: "https://ahrefs.com/broken-link-checker/?input=%currentUrl%&mode=exact",
            favicon: seofavicons["ahrefs"],
            blank: true,
        },
        {
            name: "Website Authority",
            url: "https://ahrefs.com/website-authority-checker/?input=%currentDomain%",
            favicon: seofavicons["ahrefs"],
            blank: true,
        },
        {
            name: "Wayback Machine",
            url: "https://web.archive.org/web/*/%currentUrl%",
            favicon: "https://www.google.com/s2/favicons?domain=web.archive.org",
            blank: true,
        },
    ],
    "SEO Tools": [
        {
            name: "Whois",
            url: "https://www.whois.com/whois/%s",
            favicon: seofavicons["whois"],
            blank: true,
        },
        {
            name: "who.is",
            url: "https://who.is/whois/%s",
            favicon: "https://www.google.com/s2/favicons?domain=who.is",
            blank: true,
        },
        {
            name: "PageSpeed Insights",
            url: "https://pagespeed.web.dev/analysis?url=%s",
            favicon: "https://www.google.com/s2/favicons?domain=pagespeed.web.dev",
            blank: true,
        },
        {
            name: "Ubersuggest",
            url: "https://app.neilpatel.com/en/ubersuggest/overview?keyword=%s&lang=en&locId=2840",
            favicon: "https://www.google.com/s2/favicons?domain=app.neilpatel.com",
            blank: true,
        },
        {
            name: "People Also Ask",
            url: "https://alsoasked.com/search?term=%s&language=en&region=us&depth=2",
            favicon: "https://www.google.com/s2/favicons?domain=alsoasked.com",
            blank: true,
        },
        {
            name: "Namecheap",
            url: "https://www.namecheap.com/domains/registration/results/?domain=%s",
            favicon: "https://www.google.com/s2/favicons?domain=www.namecheap.com",
            blank: true,
        },
        {
            name: "SpaceShip",
            url: "https://www.spaceship.com/domain-search/?query=%s",
            favicon: "https://www.google.com/s2/favicons?domain=www.spaceship.com",
            blank: true,
        },
    ],
    translate: [
        {
            name: "百度翻译",
            url: "https://fanyi.baidu.com/#auto/zh/%s",
            favicon:
                "data:image/svg+xml,%3Csvg t='1666877034366' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='29943' width='32' height='32'%3E%3Cpath d='M938.666667 981.333333c-17.066667 0-29.866667-8.533333-38.4-25.6l-59.733334-119.466666h-277.333333l-59.733333 119.466666c-8.533333 21.333333-34.133333 29.866667-55.466667 17.066667-25.6-8.533333-34.133333-34.133333-21.333333-51.2l72.533333-140.8 145.066667-290.133333c12.8-21.333333 34.133333-38.4 59.733333-38.4s46.933333 12.8 59.733333 38.4l145.066667 290.133333 72.533333 140.8c8.533333 21.333333 0 46.933333-17.066666 55.466667-12.8 4.266667-17.066667 4.266667-25.6 4.266666z m-332.8-226.133333h192l-98.133334-192-93.866666 192zM85.333333 844.8c-17.066667 0-29.866667-8.533333-38.4-25.6-8.533333-21.333333 0-46.933333 21.333334-55.466667 93.866667-46.933333 179.2-110.933333 247.466666-187.733333-46.933333-64-85.333333-128-110.933333-192-8.533333-21.333333 4.266667-46.933333 25.6-55.466667 21.333333-8.533333 46.933333 4.266667 55.466667 25.6 21.333333 51.2 46.933333 102.4 81.066666 149.333334 59.733333-85.333333 102.4-179.2 128-281.6H85.333333c-25.6 0-42.666667-17.066667-42.666666-42.666667s17.066667-42.666667 42.666666-42.666667h243.2V85.333333c0-25.6 17.066667-42.666667 42.666667-42.666666s42.666667 17.066667 42.666667 42.666666v51.2h238.933333c25.6 0 42.666667 17.066667 42.666667 42.666667s-17.066667 42.666667-42.666667 42.666667h-68.266667c-25.6 128-85.333333 247.466667-162.133333 349.866666l25.6 25.6c17.066667 17.066667 17.066667 42.666667 0 59.733334-17.066667 17.066667-42.666667 17.066667-59.733333 0l-17.066667-17.066667c-72.533333 81.066667-162.133333 149.333333-264.533333 200.533333-8.533333 0-17.066667 4.266667-21.333334 4.266667z' p-id='29944' fill='%231296db'%3E%3C/path%3E%3C/svg%3E",
        },
        {
            name: "谷歌翻译",
            url: "https://translate.google.com/?q=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/UlEQVQ4jYWTT0ybdRyH34MH4wVjovG2ZIl60IMXNTgoDtlG/wAy49bt4r+8XSFm2SZGox6WWNnal45SbKAbygKbShAT38yMNC9LMGyQsS5OdGtpOwqNvNkLLbwv76+KJns8lES9jG/yXJ98kidf6bGn6vY42tWEo/2SVutXtZotHEcT2o5q33vSdlfbpk68OQSH4uCNw8F+ONAPhwbhlQ9mbkuS9NADBY72S1e8cXg9ItgfEbR2bxH5k5aw+PuRJ5994YGCGr+qeePQ2i1whQRuReAMCZq6BC0992k6+nVCfuetE7J8pEOW5Q6fz/e+LMsdbW1tH7pcrgNSjV/V3uiD5rAgNr7BzB2TyzdM3u63aThVxjcgSGcKCNvCtm0sy8I0TWzbZm1tDellv6o1RSE2bpGcX+fjbzcIjG1w+AvBvqDApQhGxlMsZNOsrhgY9+6h6zq6rmNZFlL1EVVr7oXrKZOOCzbeXpvLSZPxpIl81sYR+IPPLi6RufMr0aERpm/ewiwV0fXlyoJqn6p5eiBx02RgwmJfUBBSLQr6Ov4vbeo7NzkYXiZ6foxPzvQRHvyGyPAo/SM/kM0vVQTNUfCds5lNrzM5ZzKT+lfmCpVxKwLl/E9cvXaNxORVOuNDpLM5VovFimB/DPaeFnh7BSe/2+D4sE1jsFLDrQj2hjY53jdHOP4VysAFrkxNoy//TqlUQnrRp2qtMfB0CRqDgvrPBQ2dW0lDNq5QpYbcV+IjJc6xUz2kUmmWFhcxDAOp2p+YqgjKeLrKuJXKZNcWzpCNMyioD6wTvTjFqPojp88NM/fbbVYMA+kZd6C7JQaeHvBEwNN9H/d/cHZt0qiUcXT+RXB0maVcmu/HNSanr7OyYiBJkvTwozt27a7aufvVqp21/+Pxp+uddd6xhYZ3b7Dr8BRnBn8ml02zcDdHLpdF13W2fbbnX2o/W/faBJ8GJpi79QvpdIr5+XkymQzF4ur2gqonnttzUkmSSmXJ5++Szy9SKBQwDIPZ2eTaP/p6Y/2tPjpQAAAAAElFTkSuQmCC",
        },
        {
            name: "有道词典",
            url: "https://dict.youdao.com/search?q=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVQ4jWNgGFQggps34Y2i2v83imr/78gpvZdgYFBgYGBg8OXkCUMWx2sITOEbRbX/MAMYGBgEkMVxahZiYJCBKTonLX+fkDgG0GNlNYIpnCQsOh8mbsjCYgkTXy8uvR+nAcgK0/gECmDifpw8oTDxMgGhBpwGOLKzu8MU7peSOW/BweFgyMJimc4rUAQT9+TiCiDKC7gwUsBiBezIzoUFGrKr8GnGBgSQDYjg5k3Aq7pFSKTfgoPDwYKDwyGNT6CAZNtx+RuqWYCgAXfklN6jayTo7AEHAIjTnaHLaQtfAAAAAElFTkSuQmCC",
        },
        {
            name: "必应词典",
            url: "https://cn.bing.com/dict/search?q=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==",
        },
        {
            name: "Forvo 发音",
            url: "https://zh.forvo.com/search/%s",
            favicon:
                "data:image/x-icon;base64,AAABAAEAEBAAAAAAIAAAAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAcdJREFUeJyFkk9rE1EUxX/3pZMJxtCRuim01k03IkKJCI0E9Bu4VgxxpZaKurf+ofEDqHUhFCKKuuwHUCiKBgRL24WloVZd1KIVTFprMQ2d6yKZzEsZ07u6575zzpw7XCGi+gula6AjIIMAKNO+7lz/djM7v5srNugbL10R4X6UaVB/67XUzzunNwNsgubog7k3oB3FAMmk99sbmRxoMxguLp7vTu3LHvCSqGrjRXVKIA3+GaAMEHMSVL7MQCz+tW2FTLGswaC6scXC1aG21QDSjz44S7Oz28ZxQRVFN9cn8imTKZbzNjFKDDBz8Xhd3K4hmgkF2Q9gVBkNafqi0/7r9y7M2dgbfZwzIqRbct8872TQZH1qdTBsVHUnGBjRw3vrORS0AltGkJeW4+09DUTiITBPjHFrZ8NHerJPF3r/p+2+PPnextWJ3Lx5e+5YJRjE410sf/612l8o5XaL+8ZLrxJe7wlVv5lW7zbXaNSpZ8u6uLRK3IkR3hI1EVwrP9t/KtQ21qg+zAtYp7z2/UePLW6sa4sb33VTB1vitgRh1HcfReRI1D9Q1bGVsZMFexZ5dQO3phO+415CGVShDrxeuZGZiuL+A2DYnV2Yre6zAAAAAElFTkSuQmCC",
            blank: true,
        },
        {
            name: "CNKI 翻译",
            url: "https://dict.cnki.net/dict_result.aspx?searchword=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVQ4jaXSMUhqURzH8YuBrSbiIIKIS4vo4ORQgyJCBg5Fuuqgsyh3tKFwUsjFycEIwq0lBMc7RLQFIl4RnLxXzqbe4Yp0v28I6vle+F70h99y4Hw45///S9SO+Ukkasf8XovFgkKhgCzLrFYrdtZXgBCCw8NDbDYbnU7n+4Cu67hcLlKpFEKI7wOPj4/Y7Xaen595eXmhUqmg6/r/AUIIQqEQBwcH5PN5HA4HTqcTVVW37mma9t6fP4GrqyskSfqIx+Oh1+sBsNlseHp6olwuE4lEuLy8/BsYj8fc3NwQCATw+/0Mh0NM0+Tu7o5Go0GhUKBerxMOh4nFYl/3wDAMms0mPp+P+/t7ptMpXq+XYrGIaZqs12vOzs5QFGUbGAwG9Pt9FEUhm80iSRJHR0dMJhNOTk6oVCoAtNttzs/P2Ww2n4CmabjdbhwOB7FYDL/fjyzLCCGwLItSqUQwGKRarbK3t0c6nWa5XH4Cs9mM09NTcrkco9GIWq3G7e0tlmUBMJ1OiUajxONxWq0Wqqry9va2/YXFYvExynQ6zfX1NZlMhvF4/HFuGMbuPdA0jWQySbVaRdd19vf3ubi4YL1e/3uRXl9fyefzJBIJ5vM5AN1ul4eHh/fn7gR+kF/ZQQ/WnEhepgAAAABJRU5ErkJggg==",
            disable: true,
        },
        {
            name: "汉典",
            url: "https://www.zdic.net/sousuo/?q=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJElEQVQ4jY2TMWrEMBBFdQYJuU23BsM2gbQBFSl0AEsEs+CzxClETpALpEwbttjGJ9hiwXLh1uf4W81EcpRNBgTfo9HTeDQjlnmCk7q4xrbP1joErEPIfGJsezipsbWPt5eiTo0BJfOqwjJPAAAnNevUorE54Hw6ZoCSzmN2ENFY3jifjlkNurpBNDbTFAcAl/0DRFc3DEhrkeptNgRwUkNQ4H8BTurfAV5V6OoGz4/3nHZXN3BSIxrL+ibgryIWAVQY+r9bOo1nwOvB/6j+Vqc+ryrWwqsdtrbME74+3/l7HUKxkZzUEJf9U+ZMe2Eb7O9UBnJSf/fBMk/cLOntqa1DgJOaZ4NrQJNXSrMEoUszAL01vXc0FusQ+BCNL+1FYzG2Pa51VtKhEx+TOgAAAABJRU5ErkJggg==",
            disable: true,
        },
        {
            name: "海词",
            url: "https://dict.cn/%s",
            favicon:
                "data:image/x-icon;base64,AAABAAEAEBAAAAAAIACAAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAkdJREFUeJx1k81LbVUYxn9n7y1+g3qPWYMosaKyVBp07yDJwFuUUKOoaU0v0SwuTRravHF/QFA0CQoHJTQJvHDR6IMUvXCvYpkfR49Hj573eRrsvY9KtWCxWO96n2e9H89bAZhd2XoVuG08aXvIMna5hWVUnqE9W8uSPl16eXyhMruyddPwre2USyCVJFJ+j9IuLCE5JL2eGX9sO82d//fXS2CXJKmk25nl59ogm7epc+OhQY4ED/d1U+3qpNY44ZuNTb6sQ8MgqSDXRCKrKuXsUyc1br0wzlBPN+XK0pSx4Wt8+OIEn48/Qn80kQJFEBHVrMgHWzzdnQKQVip89fs6PR0d9HZkjA/0MjP6KE+NDPPJaJ0PVneKOgTZlbwSA5BU4KfOwTzvM/H1doPV3Z957YnHeOXJUR7/4wFrkWCJRKF2SK0Qp62g2cptEWWo4vvDJmQd/Lr9F890pvm7gkwReQoSh9Fku37MTqNBblf7LQGqPV1gk2BKXKZoV5TaWZP7h8fsHDWIKPudR/NmtZ+hrk4AlmonSBUkkYWi7Xhu2Nzb56TVYjpt4sSkmJdGhnhn8lkAfly7x0YLrEAuIigJxgb6eHcqd3yPf6/N/Rof3V29UGVOELuSrlkCZ/8Bg3qzyRfLv/HZ+g57RdcK4f1def67Oz9YmpFEn87pcSADhdNpmN0IWqaYC7d1Y3sxU8S8pGkr0gOZ/aI4V7TfnhNdmlKH7fnkl7nrC4rWnEKLCh2EotDFRQesizpZOrC0aOmNP99/a+EfiilTPoj1fYcAAAAASUVORK5CYII=",
        },
        {
            name: "DeepL",
            url: "https://www.deepl.com/translator#zh/en/%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACNwAAAjcB9wZEwgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGZSURBVDiNjZKxaxRBFMZ/b2ZHbWITUxkRC4PnBUW0k1gkoFlMYmIR8R+w0UZBFAvtLAMS0ipC0guCd0GOa23EJGTPkBRCSCNHKiEgMzvPwmjCuiv3lft97zff7BuhQraWTouJLwE0mmf518a7spwUPxwZvlmLms8B4wWrLZhHPvuwUg44N9afGPcc4T5gK4pFgSUv/jHrre8HgKHJE4nzHWBgn/sZdBuYqQB1Q+5rbLR2DUBy1J89GIbEmNmQNW8DqxWAgcS5IQBT5vqYP3H1Gw9AHyosAKECVA4QuKfIPMhHVKygV4OVU8ByT4BDsiI6rWpusdbYUdgpBpLSMeGTRLYx2o5q9kT0ja2P3xU401ODQJz1neYdVRkT9C1gyob/Ngg/3VbifJf9TVg1L2Q43UC1eo3eb8KfB7O7uRf7T782Yo8hXBG4DFwvaRgFFoP4GTqt7u/bFuTOp5dU9BUw8u/BOhqy5fZ//4HvNL6ErHlNkSmFb4e9YM1WMV+5xjxrvM+P99VBngI/qnK96UI66OrpEhcnThatXx/tiqJJdDA6AAAAAElFTkSuQmCC",
            disable: true,
        },
        {
            name: "金山词霸",
            url: "https://www.iciba.com/word?w=%s",
            favicon:
                "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGElEQVQ4y6WTzUuUURTGf+e87+v3BwxYToupoYVYgViLFiPtIrBNELZsIUIUFEXQqk1I/0JU24oWZRFFiyD7WhhBDWYfq4zCsRETdfwYHL33tHhtdLSF0IEH7r1cnnOe55wjPP1u/EeEYrLuaogpoJi4LREoBhiIQa3Btbb3DLZdQbwQIdSJIC7+8y+IPP5pAKnqEgMdz+lYusGvwm/uVo3Qu7OeOoXsbIkzw9OMLDiQDRLi7CED/gJ7x94R1o2RTF7naFBFz9AEuZLnVKqewcw2Ol/kyS0b601T84AJNbnPMD+BD3ZgzSc5/naKN7OOb4vGpS8FsjMlTqcbMGeYp4wQDyCUabWVeRcwWjS8xc9iytc5T7I6Qpxguq4C8UJMsuqKG6U5WOJgY4B4JTAlckImETAyvYQhiF+DmlfWKA21GdzkVR52tXAuXcuxlognXQn2J2oYmiwhpphfg+IVvJYlGDA+dZvzH4p0p5q43NnCx3ml/9MCDw4laK9VlAi8gFdCMQMzRFb7I5AYVnpeXWTWe+aAtEAARJkDDJ7o497NO5xt7QZzcRsBzMAESq+TRI+2c1iHN0/d/SzLE+Ps3nMEKXhMIMQLSOxs8VkT+rIBdIZNCyKCNTQx3Z6ht5Be9VwIzeIW/pAUxVwEDsz9dWMDQeMu+hb3kfflwhFu5S0+RIiyaVQrwhtmKxXUsQTAWMH8VvavMsMfIrbvQBU3VlgAAAAASUVORK5CYII=",
            blank: true,
        },
    ],
    mine: [
        {
            name: "MDN",
            url: "https://developer.mozilla.org/zh-CN/search?q=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABi0lEQVR4nJ2VsU4CQRRFzy66GCtLrWysjMbEyi+wNFHBmGDpH1jYWJtAq5WxpoFEorXxB6xs1CBBI4WJVhpNoPBayMAuuzOw3FcwvMe5eTOzy0OYIGCHMk3ayBJf3FMmTxCieotN6lZwMOpsRQzIUBwZNlEk0zdIjwtR7BqQGwsXIicg4HVsgxYBFGzlGS1pepjFHlSSCiUZ/ehQS9rVerJB1eOZeUKapINNXjz14jMbzdhxWImn5oi2dCa3FuObCH85HoJL0o3mIgYeMt0o3qBVbaZ659LlfpOOyCHza5/ewsPjKJXJv0L7ORjhDIwSDnGi+/kxAv6QfAsIvY+At5SxGSxbkEshtKqanpS1PwcmGgN4xfE6hZ4DowXqlitLkh9PlVJe42e8rYvIBr4dG6ANj0mF/ZBBw2Xw7HOX1NY5Hlfd9b2r/1ufmq22gcc18OYyqA39U53Smr3aIosg7zJwRt4MltJYeEn0R9tJavw0NNqEYDvVcM31uH6WgAJVmnSsYIcmVQrh8f4HufpcPqh3SFcAAAAASUVORK5CYII=",
        },
        {
            name: "Can I Use",
            url: "https://caniuse.com/#search=%s",
            blank: true,
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAADAFBMVEXRa1hIvVUBriaErG7//vzQx7e116nq4M2Dy4FmYktwx3Tt48/y6NQXsTH+7uK2fGBhwmhoxW7Wg3HEMxe8EAD78Nqn0plRvluZ0ZLKQizNs6qupZZ0zX/9/+3669vM5cUxt0QlszpQqV6HhoPP3L1YwWKYooEQujB9ynxWUTgly0Tp38yhlIhAkEAldSRdOC706tbw5dL/8ezInXD169iK1JO7u6n+9ODAJQSY2J+Wrc+z4bLluKpnkcWbyYz/++CMzYcAqQz25dd90Yn90/ll020qwEPk28j5/OjhueEstkDfoo7k2NP+68n/5+CmSj3i2MX85dI6ukzx+ufhqp7+8/r39er29uP77NU0kjgvvEQ4LBc8nEFOzVqQvY0evzvN+f/m+drt8uHpxbnb5s7s7dpwomfb0cA3p0Ti7tfB473n3bzc7dDe3szr//9SZH0Avij37tng1ssttT7dk4Xf4t6U4ZOm3Kh81ntaelrv6Os/WC6I3Ik+iDvuzr/z2M6AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7////XnzsNAAAAmklEQVR4nF3KQQuCMADF8U2EQT1hklJCQSIhbIdCCtepRodgpxB26eKxj+ChL99mhOm7/OHHI8AdD+AFeZzXRXEhTLKKSuZyYD49xFM4T+E0hpttprAeQ2x5YAZYJEsb6KgHHweN3f6DSnL/iLTa/B5lWOq21SpMdZum5Cn4nguTi+ydCWMEAVZVR/mOAqAd8AWgBz8H12qGYR9XXh8E2WsxgQAAAABJRU5ErkJggg==",
        },
        {
            name: "GitHub",
            url: "https://github.com/search?utf8=✓&q=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADLElEQVR4nM1Xz2sTQRT+dpNScqhJW7ZJ9mx706RJ0/SHbRHR/8Cz9ORBBBEUEfwjBJVePHhQFPUiIi09SNqkSbtJU70p6dH+IOChQmpNss9Ddqezu7NJmgT0LQPZN/O+75s3bzI7wD826QxjPURUawtUktrGbWfggK7rR3bnxWjc8v51p+AIlGVZBkAdC9B1nQXbCZuZXYwsy648bh1yvV6vA8D9Bw+xvLLSNrlFSPFUiMfjEXKJnJ5arVYDgMj4REfEdvtSzAMAvF6vg8/hqFWrBACRWKIn5EzEttYQ0ddn4bS8VE3yHs3cIaKYR6VSOfD7/WHTJ3P9YSJykCuKgp1tDTvGDNoxt/FEBJ/PF+J9LAMnJycEAFFb6s9CbDc7Fo/X398vAYDX8A+ACJH4pBOFmm7jpiaMtOHJAPD7+PiIiBqdthaJJUBEHbVmeKqqjjEBLMhQzbdifrNjAcX8phCTiLBbKn1jS0BEGJ9IOrJlkndlgngeUwbQ11AsylhnM+fbtpZzxTUF+BrpFzw9ECDCXrhyjQlgSyAq2a7TDyC1tu7AHvT7LQKO+ZT0WsCdu/ccvvdvX1uWoEq6LlyC8cQUSNe7a6LH6DMFgIhQyGUE+6W7QoxNzjTFtAhwK8RYcqYj8pu3botnbxR3YGjoPBMwODx8jhWi0fLZNPsdT84inpxti/jxk2eIJ2ehaQXh7PPZtDn7XYA7jH6WywQA8alLrFgKuTSm5y7jT7VqKaJCLi0sOD7WzczYIUWRWAYMh0oAVpc/WgA31j87QIR/ry2pgXwuDeLIgdPTEAD2iQgBbo8CjfrQsutWAS7bs9m2fffmJYgINxYXr/N+xydZ+fCQACAxPcd8dgFuxsfYzcRQgkH3TzLDPOWDgxoATMzMOzpfvXiOsdFRIYlo/OqnDxgMBBrkoZCDT7Y7ANSVUMhDRNAyKWiZlOUk+bG377oD7KeOlkmxJRWRuwkAAH0kHJbM4traWMPWxhoAYGF+rmURmuMJwNOlpUcj4fCZLya8DRzu7TmuZu1YUFVbXs3cMsDbr6CqSkFV9X4vlbJuszfbhWj0qjFeakX+X9hfKwNpwLLdyLQAAAAASUVORK5CYII=",
        },
        {
            name: "w3c",
            url: "https://www.runoob.com/?s=%s",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVR4nIWTX0jTURTHP+fu59xUCJLGCgp0IIPSIvLPg9JTvZq+RBj5WJGySWVPKSH0ZCSWD/ZiFAQVqQUVBulbaQT2IkVEUhISPrTptE23e3pYm26t+sLlHrjnfL/3fM+9Qh4Gp5ubVOSmqlSLIACqGkUY8bp83acP3drYmi+ZYGSq3RP1RudFxJ9PmgOVU6GG0bs5BCNT7Z7lkuUVwPlncZaEi6GGsf4swcD0sUW14p954S6cryAoKoJ/j6VybxLEHAzVPZp1Bl63HBHB//2bYe6N2dLUJhqD68xKgANflpj7GCewL4m1qQnAJwPTLZ9ECJS7K2ja3gFogRuneRX4mYowsdSHIKRc7HJECAAYceEu2rRARECV6Ooa28pKUU0Tp0xRNseVpNXkqxljeDz5ig/zC0RiqywsLnGhf5jYWryQO00mv/j4+T6qqyoJVuzm3tNJaqoquN59ls6rN3j/+WtuubDgqJIQoRjAWsv9a5eZmnmHqiWyHAOgd+gOw71duIsc1lKRTUExE0aE51tZrbUcrq1h545yzp1oJmUtPWfacvzJoLN29KWzXhw76U6UxRJ2BSOu7GGZtyQnOTNdVft757YImn5IMy1XBHoKjfAP29JbPFw/7gUwAOH6sV5Fh9I6/1vEExvWl/UhE4TrxzvUchRl9a/qyoMfdftLLzU+WclvLQeDb1uDNqltiAZREgIPPY7vWf5XBvgFMS/Jw/yUPqwAAAAASUVORK5CYII=",
        },
        {
            name: "GreasyFork",
            url: "https://greasyfork.org/scripts?q=%s&utf8=✓",
            favicon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=",
            blank: true,
        },
    ],
};
