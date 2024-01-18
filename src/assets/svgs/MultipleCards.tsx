import { SvgXml } from "react-native-svg";

export default function MultipleCards() {
  const markup = `
  <svg width="375" height="243" viewBox="0 0 375 243" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1_191)">
    <rect x="57" y="45" width="261" height="164" rx="10" fill="#5655B9"/>
    </g>
    <g filter="url(#filter1_d_1_191)">
    <rect x="44" y="26" width="287" height="175" rx="10" fill="#FF4267"/>
    </g>
    <g filter="url(#filter2_d_1_191)">
    <path d="M336.783 26H38.2174C30.3653 26 24 31.0905 24 37.3699V180.63C24 186.91 30.3653 192 38.2174 192H336.783C344.635 192 351 186.91 351 180.63V37.3699C351 31.0905 344.635 26 336.783 26Z" fill="#1573FF"/>
    <mask id="mask0_1_191" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="24" y="26" width="327" height="166">
    <path d="M336.783 26H38.2174C30.3653 26 24 31.0905 24 37.3699V180.63C24 186.91 30.3653 192 38.2174 192H336.783C344.635 192 351 186.91 351 180.63V37.3699C351 31.0905 344.635 26 336.783 26Z" fill="#DAEBFF"/>
    </mask>
    <g mask="url(#mask0_1_191)">
    <path d="M69.8988 328.172C167.489 328.172 246.601 250.422 246.601 154.513C246.601 58.6032 167.489 -19.1469 69.8988 -19.1469C-27.6909 -19.1469 -106.803 58.6032 -106.803 154.513C-106.803 250.422 -27.6909 328.172 69.8988 328.172Z" fill="#1E1671"/>
    <path d="M342.878 133.749C395.599 133.749 438.338 91.7459 438.338 39.9326C438.338 -11.8807 395.599 -53.8836 342.878 -53.8836C290.157 -53.8836 247.418 -11.8807 247.418 39.9326C247.418 91.7459 290.157 133.749 342.878 133.749Z" fill="#4EB4FF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M287.346 160.524L291.046 150V150.002H295.041L289.104 165.475H285.108L281.72 152.159C284.114 153.452 286.259 156.054 286.943 158.449L287.346 160.524ZM296.564 150L294.201 165.491H297.978L300.339 150H296.564ZM307.955 156.31C306.635 155.623 305.826 155.16 305.826 154.458C305.842 153.819 306.51 153.165 308.002 153.165C309.228 153.133 310.13 153.436 310.814 153.739L311.157 153.9L311.67 150.659C310.925 150.355 309.742 150.02 308.281 150.02C304.552 150.02 301.926 152.063 301.91 154.985C301.879 157.141 303.79 158.337 305.22 159.055C306.681 159.791 307.178 160.269 307.178 160.923C307.162 161.927 305.997 162.391 304.909 162.391C303.403 162.391 302.594 162.152 301.366 161.592L300.868 161.354L300.34 164.722C301.227 165.137 302.859 165.503 304.552 165.522C308.515 165.522 311.094 163.51 311.126 160.396C311.139 158.688 310.132 157.379 307.955 156.31ZM318.43 150.048H321.352L324.397 165.503H320.901L320.335 162.417H315.901L314.81 165.491H310.846L316.456 151.294C316.846 150.321 317.53 150.048 318.43 150.048ZM317.001 159.313C317.081 159.306 318.521 154.297 318.521 154.297L319.672 159.313H317.001Z" fill="white"/>
    <path d="M285.697 152.109C285.426 150.86 284.564 150.018 283.393 150H277.897L277.841 150.303C282.128 151.558 285.726 155.421 286.893 159.054L285.697 152.109Z" fill="white"/>
    </g>
    </g>
    <path d="M54.7095 56.6946V69.0546C54.7095 70.4306 54.2855 71.5346 53.4375 72.3666C52.5895 73.1826 51.4695 73.5906 50.0775 73.5906C48.6695 73.5906 47.5415 73.1746 46.6935 72.3426C45.8455 71.4946 45.4215 70.3426 45.4215 68.8866H47.6055C47.6215 69.7026 47.8295 70.3666 48.2295 70.8786C48.6455 71.3906 49.2615 71.6466 50.0775 71.6466C50.8935 71.6466 51.5015 71.4066 51.9015 70.9266C52.3015 70.4306 52.5015 69.8066 52.5015 69.0546V56.6946H54.7095ZM64.7481 73.6386C63.5161 73.6386 62.3961 73.3586 61.3881 72.7986C60.3961 72.2386 59.6121 71.4466 59.0361 70.4226C58.4761 69.3826 58.1961 68.1826 58.1961 66.8226C58.1961 65.4786 58.4841 64.2946 59.0601 63.2706C59.6521 62.2306 60.4521 61.4386 61.4601 60.8946C62.4681 60.3346 63.5961 60.0546 64.8441 60.0546C66.0921 60.0546 67.2201 60.3346 68.2281 60.8946C69.2361 61.4386 70.0281 62.2226 70.6041 63.2466C71.1961 64.2706 71.4921 65.4626 71.4921 66.8226C71.4921 68.1826 71.1881 69.3826 70.5801 70.4226C69.9881 71.4466 69.1801 72.2386 68.1561 72.7986C67.1321 73.3586 65.9961 73.6386 64.7481 73.6386ZM64.7481 71.7186C65.5321 71.7186 66.2681 71.5346 66.9561 71.1666C67.6441 70.7986 68.1961 70.2466 68.6121 69.5106C69.0441 68.7746 69.2601 67.8786 69.2601 66.8226C69.2601 65.7666 69.0521 64.8706 68.6361 64.1346C68.2201 63.3986 67.6761 62.8546 67.0041 62.5026C66.3321 62.1346 65.6041 61.9506 64.8201 61.9506C64.0201 61.9506 63.2841 62.1346 62.6121 62.5026C61.9561 62.8546 61.4281 63.3986 61.0281 64.1346C60.6281 64.8706 60.4281 65.7666 60.4281 66.8226C60.4281 67.8946 60.6201 68.7986 61.0041 69.5346C61.4041 70.2706 61.9321 70.8226 62.5881 71.1906C63.2441 71.5426 63.9641 71.7186 64.7481 71.7186ZM80.8916 60.0306C81.8836 60.0306 82.7796 60.2466 83.5796 60.6786C84.3796 61.0946 85.0036 61.7266 85.4516 62.5746C85.9156 63.4226 86.1476 64.4546 86.1476 65.6706V73.4226H83.9876V65.9826C83.9876 64.6706 83.6596 63.6706 83.0036 62.9826C82.3476 62.2786 81.4516 61.9266 80.3156 61.9266C79.1636 61.9266 78.2436 62.2866 77.5556 63.0066C76.8836 63.7266 76.5476 64.7746 76.5476 66.1506V73.4226H74.3636V55.6626H76.5476V62.1426C76.9796 61.4706 77.5716 60.9506 78.3236 60.5826C79.0916 60.2146 79.9476 60.0306 80.8916 60.0306ZM96.1232 60.0306C97.7232 60.0306 99.0192 60.5186 100.011 61.4946C101.003 62.4546 101.499 63.8466 101.499 65.6706V73.4226H99.3392V65.9826C99.3392 64.6706 99.0112 63.6706 98.3552 62.9826C97.6992 62.2786 96.8032 61.9266 95.6672 61.9266C94.5152 61.9266 93.5952 62.2866 92.9072 63.0066C92.2352 63.7266 91.8992 64.7746 91.8992 66.1506V73.4226H89.7152V60.2706H91.8992V62.1426C92.3312 61.4706 92.9152 60.9506 93.6512 60.5826C94.4032 60.2146 95.2272 60.0306 96.1232 60.0306ZM116.769 73.5906C115.665 73.5906 114.673 73.3986 113.793 73.0146C112.929 72.6146 112.249 72.0706 111.753 71.3826C111.257 70.6786 111.001 69.8706 110.985 68.9586H113.313C113.393 69.7426 113.713 70.4066 114.273 70.9506C114.849 71.4786 115.681 71.7426 116.769 71.7426C117.809 71.7426 118.625 71.4866 119.217 70.9746C119.825 70.4466 120.129 69.7746 120.129 68.9586C120.129 68.3186 119.953 67.7986 119.601 67.3986C119.249 66.9986 118.809 66.6946 118.281 66.4866C117.753 66.2786 117.041 66.0546 116.145 65.8146C115.041 65.5266 114.153 65.2386 113.481 64.9506C112.825 64.6626 112.257 64.2146 111.777 63.6066C111.313 62.9826 111.081 62.1506 111.081 61.1106C111.081 60.1986 111.313 59.3906 111.777 58.6866C112.241 57.9826 112.889 57.4386 113.721 57.0546C114.569 56.6706 115.537 56.4786 116.625 56.4786C118.193 56.4786 119.473 56.8706 120.465 57.6546C121.473 58.4386 122.041 59.4786 122.169 60.7746H119.769C119.689 60.1346 119.353 59.5746 118.761 59.0946C118.169 58.5986 117.385 58.3506 116.409 58.3506C115.497 58.3506 114.753 58.5906 114.177 59.0706C113.601 59.5346 113.313 60.1906 113.313 61.0386C113.313 61.6466 113.481 62.1426 113.817 62.5266C114.169 62.9106 114.593 63.2066 115.089 63.4146C115.601 63.6066 116.313 63.8306 117.225 64.0866C118.329 64.3906 119.217 64.6946 119.889 64.9986C120.561 65.2866 121.137 65.7426 121.617 66.3666C122.097 66.9746 122.337 67.8066 122.337 68.8626C122.337 69.6786 122.121 70.4466 121.689 71.1666C121.257 71.8866 120.617 72.4706 119.769 72.9186C118.921 73.3666 117.921 73.5906 116.769 73.5906ZM141.367 60.0306C142.391 60.0306 143.303 60.2466 144.103 60.6786C144.903 61.0946 145.535 61.7266 145.999 62.5746C146.463 63.4226 146.695 64.4546 146.695 65.6706V73.4226H144.535V65.9826C144.535 64.6706 144.207 63.6706 143.551 62.9826C142.911 62.2786 142.039 61.9266 140.935 61.9266C139.799 61.9266 138.895 62.2946 138.223 63.0306C137.551 63.7506 137.215 64.7986 137.215 66.1746V73.4226H135.055V65.9826C135.055 64.6706 134.727 63.6706 134.071 62.9826C133.431 62.2786 132.559 61.9266 131.455 61.9266C130.319 61.9266 129.415 62.2946 128.743 63.0306C128.071 63.7506 127.735 64.7986 127.735 66.1746V73.4226H125.551V60.2706H127.735V62.1666C128.167 61.4786 128.743 60.9506 129.463 60.5826C130.199 60.2146 131.007 60.0306 131.887 60.0306C132.991 60.0306 133.967 60.2786 134.815 60.7746C135.663 61.2706 136.295 61.9986 136.711 62.9586C137.079 62.0306 137.687 61.3106 138.535 60.7986C139.383 60.2866 140.327 60.0306 141.367 60.0306ZM151.406 58.1346C150.99 58.1346 150.638 57.9906 150.35 57.7026C150.062 57.4146 149.918 57.0626 149.918 56.6466C149.918 56.2306 150.062 55.8786 150.35 55.5906C150.638 55.3026 150.99 55.1586 151.406 55.1586C151.806 55.1586 152.142 55.3026 152.414 55.5906C152.702 55.8786 152.846 56.2306 152.846 56.6466C152.846 57.0626 152.702 57.4146 152.414 57.7026C152.142 57.9906 151.806 58.1346 151.406 58.1346ZM152.462 60.2706V73.4226H150.278V60.2706H152.462ZM158.848 62.0706V69.8226C158.848 70.4626 158.984 70.9186 159.256 71.1906C159.528 71.4466 160 71.5746 160.672 71.5746H162.28V73.4226H160.312C159.096 73.4226 158.184 73.1426 157.576 72.5826C156.968 72.0226 156.664 71.1026 156.664 69.8226V62.0706H154.96V60.2706H156.664V56.9586H158.848V60.2706H162.28V62.0706H158.848ZM171.454 60.0306C172.446 60.0306 173.342 60.2466 174.142 60.6786C174.942 61.0946 175.566 61.7266 176.014 62.5746C176.478 63.4226 176.71 64.4546 176.71 65.6706V73.4226H174.55V65.9826C174.55 64.6706 174.222 63.6706 173.566 62.9826C172.91 62.2786 172.014 61.9266 170.878 61.9266C169.726 61.9266 168.806 62.2866 168.118 63.0066C167.446 63.7266 167.11 64.7746 167.11 66.1506V73.4226H164.926V55.6626H167.11V62.1426C167.542 61.4706 168.134 60.9506 168.886 60.5826C169.654 60.2146 170.51 60.0306 171.454 60.0306Z" fill="white"/>
    <path d="M44.9555 126.938C44.9555 125.986 45.1748 125.132 45.6135 124.376C46.0615 123.62 46.6635 123.032 47.4195 122.612C48.1848 122.183 49.0202 121.968 49.9255 121.968C50.9615 121.968 51.8808 122.225 52.6835 122.738C53.4955 123.242 54.0835 123.961 54.4475 124.894H52.5295C52.2775 124.381 51.9275 123.998 51.4795 123.746C51.0315 123.494 50.5135 123.368 49.9255 123.368C49.2815 123.368 48.7075 123.513 48.2035 123.802C47.6995 124.092 47.3028 124.507 47.0135 125.048C46.7335 125.59 46.5935 126.22 46.5935 126.938C46.5935 127.657 46.7335 128.287 47.0135 128.828C47.3028 129.37 47.6995 129.79 48.2035 130.088C48.7075 130.378 49.2815 130.522 49.9255 130.522C50.5135 130.522 51.0315 130.396 51.4795 130.144C51.9275 129.892 52.2775 129.51 52.5295 128.996H54.4475C54.0835 129.93 53.4955 130.648 52.6835 131.152C51.8808 131.656 50.9615 131.908 49.9255 131.908C49.0108 131.908 48.1755 131.698 47.4195 131.278C46.6635 130.849 46.0615 130.256 45.6135 129.5C45.1748 128.744 44.9555 127.89 44.9555 126.938ZM57.9116 125.23C58.145 124.838 58.453 124.535 58.8356 124.32C59.2276 124.096 59.6896 123.984 60.2216 123.984V125.636H59.8156C59.1903 125.636 58.7143 125.795 58.3876 126.112C58.0703 126.43 57.9116 126.98 57.9116 127.764V131.824H56.3156V124.11H57.9116V125.23ZM65.0347 131.95C64.3067 131.95 63.6487 131.787 63.0607 131.46C62.4727 131.124 62.0107 130.658 61.6747 130.06C61.3387 129.454 61.1707 128.754 61.1707 127.96C61.1707 127.176 61.3433 126.481 61.6887 125.874C62.034 125.268 62.5053 124.801 63.1027 124.474C63.7 124.148 64.3673 123.984 65.1047 123.984C65.842 123.984 66.5093 124.148 67.1067 124.474C67.704 124.801 68.1753 125.268 68.5207 125.874C68.866 126.481 69.0387 127.176 69.0387 127.96C69.0387 128.744 68.8613 129.44 68.5067 130.046C68.152 130.653 67.6667 131.124 67.0507 131.46C66.444 131.787 65.772 131.95 65.0347 131.95ZM65.0347 130.564C65.4453 130.564 65.828 130.466 66.1827 130.27C66.5467 130.074 66.8407 129.78 67.0647 129.388C67.2887 128.996 67.4007 128.52 67.4007 127.96C67.4007 127.4 67.2933 126.929 67.0787 126.546C66.864 126.154 66.5793 125.86 66.2247 125.664C65.87 125.468 65.4873 125.37 65.0767 125.37C64.666 125.37 64.2833 125.468 63.9287 125.664C63.5833 125.86 63.308 126.154 63.1027 126.546C62.8973 126.929 62.7947 127.4 62.7947 127.96C62.7947 128.791 63.0047 129.435 63.4247 129.892C63.854 130.34 64.3907 130.564 65.0347 130.564ZM80.9764 124.11L78.5824 131.824H76.9024L75.3484 126.126L73.7944 131.824H72.1144L69.7064 124.11H71.3304L72.9404 130.312L74.5784 124.11H76.2444L77.8124 130.284L79.4084 124.11H80.9764ZM81.6371 127.932C81.6371 127.158 81.7958 126.472 82.1131 125.874C82.4398 125.277 82.8785 124.815 83.4291 124.488C83.9891 124.152 84.6098 123.984 85.2911 123.984C85.7951 123.984 86.2898 124.096 86.7751 124.32C87.2698 124.535 87.6618 124.824 87.9511 125.188V121.464H89.5611V131.824H87.9511V130.662C87.6898 131.036 87.3258 131.344 86.8591 131.586C86.4018 131.829 85.8745 131.95 85.2771 131.95C84.6051 131.95 83.9891 131.782 83.4291 131.446C82.8785 131.101 82.4398 130.625 82.1131 130.018C81.7958 129.402 81.6371 128.707 81.6371 127.932ZM87.9511 127.96C87.9511 127.428 87.8391 126.966 87.6151 126.574C87.4005 126.182 87.1158 125.884 86.7611 125.678C86.4065 125.473 86.0238 125.37 85.6131 125.37C85.2025 125.37 84.8198 125.473 84.4651 125.678C84.1105 125.874 83.8211 126.168 83.5971 126.56C83.3825 126.943 83.2751 127.4 83.2751 127.932C83.2751 128.464 83.3825 128.931 83.5971 129.332C83.8211 129.734 84.1105 130.042 84.4651 130.256C84.8291 130.462 85.2118 130.564 85.6131 130.564C86.0238 130.564 86.4065 130.462 86.7611 130.256C87.1158 130.051 87.4005 129.752 87.6151 129.36C87.8391 128.959 87.9511 128.492 87.9511 127.96ZM94.8914 125.412H93.4634V131.824H91.8534V125.412H90.9434V124.11H91.8534V123.564C91.8534 122.678 92.0868 122.034 92.5534 121.632C93.0294 121.222 93.7714 121.016 94.7794 121.016V122.346C94.2941 122.346 93.9534 122.44 93.7574 122.626C93.5614 122.804 93.4634 123.116 93.4634 123.564V124.11H94.8914V125.412ZM99.6519 131.95C98.9239 131.95 98.2659 131.787 97.6779 131.46C97.0899 131.124 96.6279 130.658 96.2919 130.06C95.9559 129.454 95.7879 128.754 95.7879 127.96C95.7879 127.176 95.9605 126.481 96.3059 125.874C96.6512 125.268 97.1225 124.801 97.7199 124.474C98.3172 124.148 98.9845 123.984 99.7219 123.984C100.459 123.984 101.127 124.148 101.724 124.474C102.321 124.801 102.793 125.268 103.138 125.874C103.483 126.481 103.656 127.176 103.656 127.96C103.656 128.744 103.479 129.44 103.124 130.046C102.769 130.653 102.284 131.124 101.668 131.46C101.061 131.787 100.389 131.95 99.6519 131.95ZM99.6519 130.564C100.063 130.564 100.445 130.466 100.8 130.27C101.164 130.074 101.458 129.78 101.682 129.388C101.906 128.996 102.018 128.52 102.018 127.96C102.018 127.4 101.911 126.929 101.696 126.546C101.481 126.154 101.197 125.86 100.842 125.664C100.487 125.468 100.105 125.37 99.6939 125.37C99.2832 125.37 98.9005 125.468 98.5459 125.664C98.2005 125.86 97.9252 126.154 97.7199 126.546C97.5145 126.929 97.4119 127.4 97.4119 127.96C97.4119 128.791 97.6219 129.435 98.0419 129.892C98.4712 130.34 99.0079 130.564 99.6519 130.564ZM106.83 125.23C107.063 124.838 107.371 124.535 107.754 124.32C108.146 124.096 108.608 123.984 109.14 123.984V125.636H108.734C108.108 125.636 107.632 125.795 107.306 126.112C106.988 126.43 106.83 126.98 106.83 127.764V131.824H105.234V124.11H106.83V125.23ZM119.945 123.984C120.551 123.984 121.093 124.11 121.569 124.362C122.054 124.614 122.432 124.988 122.703 125.482C122.983 125.977 123.123 126.574 123.123 127.274V131.824H121.541V127.512C121.541 126.822 121.368 126.294 121.023 125.93C120.677 125.557 120.206 125.37 119.609 125.37C119.011 125.37 118.535 125.557 118.181 125.93C117.835 126.294 117.663 126.822 117.663 127.512V131.824H116.081V127.512C116.081 126.822 115.908 126.294 115.563 125.93C115.217 125.557 114.746 125.37 114.149 125.37C113.551 125.37 113.075 125.557 112.721 125.93C112.375 126.294 112.203 126.822 112.203 127.512V131.824H110.607V124.11H112.203V124.992C112.464 124.675 112.795 124.428 113.197 124.25C113.598 124.073 114.027 123.984 114.485 123.984C115.101 123.984 115.651 124.115 116.137 124.376C116.622 124.638 116.995 125.016 117.257 125.51C117.49 125.044 117.854 124.675 118.349 124.404C118.843 124.124 119.375 123.984 119.945 123.984ZM135.594 124.992C135.594 125.487 135.478 125.954 135.244 126.392C135.011 126.831 134.638 127.19 134.124 127.47C133.611 127.741 132.953 127.876 132.15 127.876H130.386V131.824H128.79V122.094H132.15C132.897 122.094 133.527 122.225 134.04 122.486C134.563 122.738 134.95 123.084 135.202 123.522C135.464 123.961 135.594 124.451 135.594 124.992ZM132.15 126.574C132.757 126.574 133.21 126.439 133.508 126.168C133.807 125.888 133.956 125.496 133.956 124.992C133.956 123.928 133.354 123.396 132.15 123.396H130.386V126.574H132.15ZM138.712 121.464V131.824H137.116V121.464H138.712ZM140.276 127.932C140.276 127.158 140.434 126.472 140.752 125.874C141.078 125.277 141.517 124.815 142.068 124.488C142.628 124.152 143.244 123.984 143.916 123.984C144.522 123.984 145.05 124.106 145.498 124.348C145.955 124.582 146.319 124.876 146.59 125.23V124.11H148.2V131.824H146.59V130.676C146.319 131.04 145.95 131.344 145.484 131.586C145.017 131.829 144.485 131.95 143.888 131.95C143.225 131.95 142.618 131.782 142.068 131.446C141.517 131.101 141.078 130.625 140.752 130.018C140.434 129.402 140.276 128.707 140.276 127.932ZM146.59 127.96C146.59 127.428 146.478 126.966 146.254 126.574C146.039 126.182 145.754 125.884 145.4 125.678C145.045 125.473 144.662 125.37 144.252 125.37C143.841 125.37 143.458 125.473 143.104 125.678C142.749 125.874 142.46 126.168 142.236 126.56C142.021 126.943 141.914 127.4 141.914 127.932C141.914 128.464 142.021 128.931 142.236 129.332C142.46 129.734 142.749 130.042 143.104 130.256C143.468 130.462 143.85 130.564 144.252 130.564C144.662 130.564 145.045 130.462 145.4 130.256C145.754 130.051 146.039 129.752 146.254 129.36C146.478 128.959 146.59 128.492 146.59 127.96ZM152.158 125.412V129.682C152.158 129.972 152.223 130.182 152.354 130.312C152.494 130.434 152.727 130.494 153.054 130.494H154.034V131.824H152.774C152.055 131.824 151.505 131.656 151.122 131.32C150.739 130.984 150.548 130.438 150.548 129.682V125.412H149.638V124.11H150.548V122.192H152.158V124.11H154.034V125.412H152.158ZM156.317 123.088C156.028 123.088 155.785 122.99 155.589 122.794C155.393 122.598 155.295 122.356 155.295 122.066C155.295 121.777 155.393 121.534 155.589 121.338C155.785 121.142 156.028 121.044 156.317 121.044C156.597 121.044 156.835 121.142 157.031 121.338C157.227 121.534 157.325 121.777 157.325 122.066C157.325 122.356 157.227 122.598 157.031 122.794C156.835 122.99 156.597 123.088 156.317 123.088ZM157.101 124.11V131.824H155.505V124.11H157.101ZM163.088 123.984C163.695 123.984 164.236 124.11 164.712 124.362C165.198 124.614 165.576 124.988 165.846 125.482C166.117 125.977 166.252 126.574 166.252 127.274V131.824H164.67V127.512C164.67 126.822 164.498 126.294 164.152 125.93C163.807 125.557 163.336 125.37 162.738 125.37C162.141 125.37 161.665 125.557 161.31 125.93C160.965 126.294 160.792 126.822 160.792 127.512V131.824H159.196V124.11H160.792V124.992C161.054 124.675 161.385 124.428 161.786 124.25C162.197 124.073 162.631 123.984 163.088 123.984ZM169.1 123.088C168.811 123.088 168.568 122.99 168.372 122.794C168.176 122.598 168.078 122.356 168.078 122.066C168.078 121.777 168.176 121.534 168.372 121.338C168.568 121.142 168.811 121.044 169.1 121.044C169.38 121.044 169.618 121.142 169.814 121.338C170.01 121.534 170.108 121.777 170.108 122.066C170.108 122.356 170.01 122.598 169.814 122.794C169.618 122.99 169.38 123.088 169.1 123.088ZM169.884 124.11V131.824H168.288V124.11H169.884ZM178.966 124.11V131.824H177.37V130.914C177.118 131.232 176.786 131.484 176.376 131.67C175.974 131.848 175.545 131.936 175.088 131.936C174.481 131.936 173.935 131.81 173.45 131.558C172.974 131.306 172.596 130.933 172.316 130.438C172.045 129.944 171.91 129.346 171.91 128.646V124.11H173.492V128.408C173.492 129.099 173.664 129.631 174.01 130.004C174.355 130.368 174.826 130.55 175.424 130.55C176.021 130.55 176.492 130.368 176.838 130.004C177.192 129.631 177.37 129.099 177.37 128.408V124.11H178.966ZM190.409 123.984C191.016 123.984 191.557 124.11 192.033 124.362C192.519 124.614 192.897 124.988 193.167 125.482C193.447 125.977 193.587 126.574 193.587 127.274V131.824H192.005V127.512C192.005 126.822 191.833 126.294 191.487 125.93C191.142 125.557 190.671 125.37 190.073 125.37C189.476 125.37 189 125.557 188.645 125.93C188.3 126.294 188.127 126.822 188.127 127.512V131.824H186.545V127.512C186.545 126.822 186.373 126.294 186.027 125.93C185.682 125.557 185.211 125.37 184.613 125.37C184.016 125.37 183.54 125.557 183.185 125.93C182.84 126.294 182.667 126.822 182.667 127.512V131.824H181.071V124.11H182.667V124.992C182.929 124.675 183.26 124.428 183.661 124.25C184.063 124.073 184.492 123.984 184.949 123.984C185.565 123.984 186.116 124.115 186.601 124.376C187.087 124.638 187.46 125.016 187.721 125.51C187.955 125.044 188.319 124.675 188.813 124.404C189.308 124.124 189.84 123.984 190.409 123.984Z" fill="white"/>
    <path d="M45.254 163.38V162.276L50.87 154.5H52.614V162.116H54.214V163.38H52.614V165.956H51.174V163.38H45.254ZM51.238 156.02L46.934 162.116H51.238V156.02ZM62.7885 155.524L58.3405 165.956H56.8685L61.3805 155.668H55.2045V154.42H62.7885V155.524ZM71.7789 155.652H66.1629V159.3C66.4082 158.959 66.7709 158.682 67.2509 158.468C67.7309 158.244 68.2482 158.132 68.8029 158.132C69.6882 158.132 70.4082 158.319 70.9629 158.692C71.5175 159.055 71.9122 159.53 72.1469 160.116C72.3922 160.692 72.5149 161.306 72.5149 161.956C72.5149 162.724 72.3709 163.412 72.0829 164.02C71.7949 164.628 71.3522 165.108 70.7549 165.46C70.1682 165.812 69.4375 165.988 68.5629 165.988C67.4429 165.988 66.5362 165.7 65.8429 165.124C65.1495 164.548 64.7282 163.78 64.5789 162.82H66.0029C66.1415 163.428 66.4349 163.903 66.8829 164.244C67.3309 164.586 67.8962 164.756 68.5789 164.756C69.4215 164.756 70.0562 164.506 70.4829 164.004C70.9095 163.492 71.1229 162.82 71.1229 161.988C71.1229 161.156 70.9095 160.516 70.4829 160.068C70.0562 159.61 69.4269 159.38 68.5949 159.38C68.0295 159.38 67.5335 159.519 67.1069 159.796C66.6909 160.063 66.3869 160.431 66.1949 160.9H64.8189V154.372H71.7789V155.652ZM80.8977 157.14C80.6631 155.956 79.9324 155.364 78.7057 155.364C77.7564 155.364 77.0471 155.732 76.5777 156.468C76.1084 157.194 75.8791 158.394 75.8897 160.068C76.1351 159.514 76.5404 159.082 77.1057 158.772C77.6817 158.452 78.3217 158.292 79.0257 158.292C80.1244 158.292 80.9991 158.634 81.6497 159.316C82.3111 159.999 82.6417 160.943 82.6417 162.148C82.6417 162.874 82.4977 163.524 82.2097 164.1C81.9324 164.676 81.5057 165.135 80.9297 165.476C80.3644 165.818 79.6764 165.988 78.8657 165.988C77.7671 165.988 76.9084 165.743 76.2897 165.252C75.6711 164.762 75.2391 164.084 74.9937 163.22C74.7484 162.356 74.6257 161.29 74.6257 160.02C74.6257 156.106 75.9911 154.148 78.7217 154.148C79.7671 154.148 80.5884 154.431 81.1857 154.996C81.7831 155.562 82.1351 156.276 82.2417 157.14H80.8977ZM78.7217 159.524C78.2631 159.524 77.8311 159.62 77.4257 159.812C77.0204 159.994 76.6897 160.276 76.4337 160.66C76.1884 161.034 76.0657 161.492 76.0657 162.036C76.0657 162.847 76.3004 163.508 76.7697 164.02C77.2391 164.522 77.9111 164.772 78.7857 164.772C79.5324 164.772 80.1244 164.543 80.5617 164.084C81.0097 163.615 81.2337 162.986 81.2337 162.196C81.2337 161.364 81.0204 160.714 80.5937 160.244C80.1671 159.764 79.5431 159.524 78.7217 159.524Z" fill="white"/>
    <path d="M199.739 162.853C199.846 163.461 200.091 163.93 200.475 164.261C200.87 164.591 201.398 164.757 202.059 164.757C202.945 164.757 203.595 164.41 204.011 163.717C204.438 163.023 204.641 161.855 204.619 160.213C204.395 160.693 204.022 161.071 203.499 161.349C202.977 161.615 202.395 161.749 201.755 161.749C201.041 161.749 200.401 161.605 199.835 161.317C199.281 161.018 198.843 160.586 198.523 160.021C198.203 159.455 198.043 158.773 198.043 157.973C198.043 156.831 198.374 155.914 199.035 155.221C199.697 154.517 200.635 154.165 201.851 154.165C203.345 154.165 204.39 154.65 204.987 155.621C205.595 156.591 205.899 158.037 205.899 159.957C205.899 161.301 205.777 162.41 205.531 163.285C205.297 164.159 204.891 164.826 204.315 165.285C203.75 165.743 202.971 165.973 201.979 165.973C200.891 165.973 200.043 165.679 199.435 165.093C198.827 164.506 198.481 163.759 198.395 162.853H199.739ZM201.995 160.517C202.71 160.517 203.297 160.298 203.755 159.861C204.214 159.413 204.443 158.81 204.443 158.053C204.443 157.253 204.219 156.607 203.771 156.117C203.323 155.626 202.694 155.381 201.883 155.381C201.137 155.381 200.539 155.615 200.091 156.085C199.654 156.554 199.435 157.173 199.435 157.941C199.435 158.719 199.654 159.343 200.091 159.813C200.529 160.282 201.163 160.517 201.995 160.517ZM207.945 160.053C207.945 158.218 208.244 156.789 208.841 155.765C209.439 154.73 210.484 154.213 211.977 154.213C213.46 154.213 214.5 154.73 215.097 155.765C215.695 156.789 215.993 158.218 215.993 160.053C215.993 161.919 215.695 163.37 215.097 164.405C214.5 165.439 213.46 165.957 211.977 165.957C210.484 165.957 209.439 165.439 208.841 164.405C208.244 163.37 207.945 161.919 207.945 160.053ZM214.553 160.053C214.553 159.125 214.489 158.341 214.361 157.701C214.244 157.05 213.993 156.527 213.609 156.133C213.236 155.738 212.692 155.541 211.977 155.541C211.252 155.541 210.697 155.738 210.313 156.133C209.94 156.527 209.689 157.05 209.561 157.701C209.444 158.341 209.385 159.125 209.385 160.053C209.385 161.013 209.444 161.818 209.561 162.469C209.689 163.119 209.94 163.642 210.313 164.037C210.697 164.431 211.252 164.629 211.977 164.629C212.692 164.629 213.236 164.431 213.609 164.037C213.993 163.642 214.244 163.119 214.361 162.469C214.489 161.818 214.553 161.013 214.553 160.053ZM217.608 155.717V154.389H220.616V165.957H219.144V155.717H217.608ZM225.229 159.941C224.632 159.706 224.173 159.365 223.853 158.917C223.533 158.469 223.373 157.925 223.373 157.285C223.373 156.709 223.517 156.191 223.805 155.733C224.093 155.263 224.52 154.895 225.085 154.629C225.661 154.351 226.355 154.213 227.165 154.213C227.976 154.213 228.664 154.351 229.229 154.629C229.805 154.895 230.237 155.263 230.525 155.733C230.824 156.191 230.973 156.709 230.973 157.285C230.973 157.903 230.808 158.447 230.477 158.917C230.147 159.375 229.693 159.717 229.117 159.941C229.779 160.143 230.301 160.501 230.685 161.013C231.08 161.514 231.277 162.122 231.277 162.837C231.277 163.53 231.107 164.138 230.765 164.661C230.424 165.173 229.939 165.573 229.309 165.861C228.691 166.138 227.976 166.277 227.165 166.277C226.355 166.277 225.64 166.138 225.021 165.861C224.413 165.573 223.939 165.173 223.597 164.661C223.256 164.138 223.085 163.53 223.085 162.837C223.085 162.122 223.277 161.509 223.661 160.997C224.045 160.485 224.568 160.133 225.229 159.941ZM229.565 157.461C229.565 156.81 229.352 156.309 228.925 155.957C228.499 155.605 227.912 155.429 227.165 155.429C226.429 155.429 225.848 155.605 225.421 155.957C224.995 156.309 224.781 156.815 224.781 157.477C224.781 158.074 225 158.554 225.437 158.917C225.885 159.279 226.461 159.461 227.165 159.461C227.88 159.461 228.456 159.279 228.893 158.917C229.341 158.543 229.565 158.058 229.565 157.461ZM227.165 160.581C226.376 160.581 225.731 160.767 225.229 161.141C224.728 161.503 224.477 162.053 224.477 162.789C224.477 163.471 224.717 164.021 225.197 164.437C225.688 164.853 226.344 165.061 227.165 165.061C227.987 165.061 228.637 164.853 229.117 164.437C229.597 164.021 229.837 163.471 229.837 162.789C229.837 162.074 229.592 161.53 229.101 161.157C228.611 160.773 227.965 160.581 227.165 160.581Z" fill="white"/>
    <path d="M128.504 161.744C128.496 161.217 128.644 160.7 128.932 160.258C129.219 159.816 129.631 159.469 130.116 159.261C130.602 159.054 131.138 158.996 131.656 159.093C132.175 159.191 132.653 159.441 133.029 159.81C133.405 160.18 133.662 160.653 133.768 161.169C133.874 161.685 133.824 162.221 133.624 162.709C133.424 163.196 133.083 163.614 132.645 163.907C132.206 164.201 131.69 164.357 131.163 164.357C130.463 164.363 129.79 164.09 129.291 163.6C128.793 163.11 128.509 162.442 128.504 161.744ZM118.537 161.744C118.529 161.217 118.678 160.7 118.965 160.258C119.252 159.816 119.665 159.469 120.15 159.261C120.635 159.054 121.171 158.996 121.69 159.093C122.208 159.191 122.686 159.441 123.062 159.81C123.438 160.18 123.696 160.653 123.802 161.169C123.908 161.685 123.857 162.221 123.657 162.709C123.457 163.196 123.117 163.614 122.678 163.907C122.24 164.201 121.724 164.357 121.196 164.357C120.85 164.36 120.506 164.295 120.185 164.165C119.864 164.035 119.571 163.843 119.324 163.601C119.078 163.358 118.881 163.069 118.746 162.75C118.611 162.432 118.54 162.09 118.537 161.744H118.537ZM108.567 161.744C108.558 161.217 108.707 160.7 108.994 160.258C109.282 159.816 109.694 159.469 110.179 159.261C110.664 159.054 111.2 158.996 111.719 159.093C112.238 159.191 112.715 159.441 113.091 159.81C113.468 160.18 113.725 160.653 113.831 161.169C113.937 161.685 113.887 162.221 113.687 162.709C113.487 163.196 113.146 163.614 112.707 163.907C112.269 164.201 111.753 164.357 111.226 164.357C110.526 164.363 109.853 164.09 109.354 163.6C108.855 163.11 108.572 162.442 108.567 161.744ZM98.6002 161.744C98.592 161.217 98.7409 160.7 99.0281 160.258C99.3153 159.816 99.7277 159.469 100.213 159.261C100.698 159.054 101.234 158.996 101.753 159.093C102.271 159.191 102.749 159.441 103.125 159.81C103.501 160.18 103.759 160.653 103.865 161.169C103.97 161.685 103.92 162.221 103.72 162.709C103.52 163.196 103.179 163.614 102.741 163.907C102.303 164.201 101.787 164.357 101.259 164.357C100.913 164.36 100.569 164.295 100.248 164.165C99.9265 164.035 99.6342 163.843 99.3873 163.601C99.1403 163.358 98.9437 163.069 98.8086 162.75C98.6735 162.432 98.6025 162.09 98.5999 161.744H98.6002Z" fill="white"/>
    <path d="M175.03 161.74C175.022 161.213 175.171 160.696 175.458 160.254C175.745 159.812 176.157 159.465 176.643 159.258C177.128 159.051 177.664 158.992 178.182 159.09C178.701 159.188 179.179 159.437 179.555 159.807C179.931 160.176 180.188 160.649 180.294 161.166C180.4 161.682 180.35 162.218 180.15 162.705C179.95 163.193 179.609 163.61 179.171 163.904C178.732 164.197 178.217 164.354 177.689 164.354C176.989 164.359 176.316 164.087 175.817 163.597C175.319 163.107 175.035 162.439 175.03 161.74ZM165.059 161.74C165.051 161.213 165.2 160.696 165.487 160.254C165.775 159.812 166.187 159.465 166.672 159.258C167.157 159.051 167.693 158.992 168.212 159.09C168.73 159.188 169.208 159.437 169.584 159.807C169.96 160.176 170.218 160.649 170.324 161.166C170.43 161.682 170.38 162.218 170.18 162.705C169.979 163.193 169.639 163.61 169.2 163.904C168.762 164.197 168.246 164.354 167.718 164.354C167.019 164.359 166.346 164.087 165.847 163.597C165.348 163.107 165.065 162.439 165.059 161.74ZM155.093 161.74C155.085 161.213 155.233 160.696 155.521 160.254C155.808 159.812 156.22 159.465 156.705 159.258C157.191 159.051 157.727 158.992 158.245 159.09C158.764 159.188 159.241 159.437 159.618 159.807C159.994 160.176 160.251 160.649 160.357 161.166C160.463 161.682 160.413 162.218 160.213 162.705C160.013 163.193 159.672 163.61 159.234 163.904C158.795 164.197 158.28 164.354 157.752 164.354C157.052 164.359 156.379 164.087 155.88 163.597C155.382 163.107 155.098 162.439 155.093 161.74ZM145.122 161.74C145.114 161.213 145.263 160.696 145.55 160.254C145.837 159.812 146.25 159.465 146.735 159.258C147.22 159.051 147.756 158.992 148.275 159.09C148.793 159.188 149.271 159.437 149.647 159.807C150.023 160.176 150.281 160.649 150.387 161.166C150.493 161.682 150.442 162.218 150.242 162.705C150.042 163.193 149.701 163.61 149.263 163.904C148.825 164.197 148.309 164.354 147.781 164.354C147.082 164.359 146.408 164.087 145.91 163.597C145.411 163.107 145.128 162.439 145.122 161.74Z" fill="white"/>
    <defs>
    <filter id="filter0_d_1_191" x="27" y="19" width="321" height="224" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="15"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.160784 0 0 0 0 0.717647 0 0 0 0.07 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_191"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_191" result="shape"/>
    </filter>
    <filter id="filter1_d_1_191" x="14" y="0" width="347" height="235" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="15"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.160784 0 0 0 0 0.717647 0 0 0 0.07 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_191"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_191" result="shape"/>
    </filter>
    <filter id="filter2_d_1_191" x="-6" y="0" width="387" height="226" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="15"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.160784 0 0 0 0 0.717647 0 0 0 0.07 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_191"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_191" result="shape"/>
    </filter>
    </defs>
  </svg>
`;
  return <SvgXml xml={markup} />;
}
