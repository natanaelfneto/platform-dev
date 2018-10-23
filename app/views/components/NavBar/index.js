import React, { Component } from "react";
import { } from "./navbar.css";

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

import { Icon } from "@blueprintjs/core";


let icon_hack = <svg width="159" height="33" viewBox="0 0 159 33" xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" fill="none" fillRule="evenodd">
        <g id="Artboard-2" transform="translate(-177 -25)">
            <g id="Group-2" transform="translate(177 25)">
                <g id="Group" fill="#212121" fillRule="nonzero">
                    <path d="M14,0.887229633 L0.823529412,8.49466847 L0.823529412,23.7095462 L14,31.316985 L27.1764706,23.7095462 L27.1764706,8.49466847 L14,0.887229633 Z M14.2058824,0.0551660102 L27.7941176,7.90033732 C27.9215181,7.973892 28,8.10982665 28,8.25693601 L28,23.9472786 C28,24.094388 27.9215181,24.2303226 27.7941176,24.3038773 L14.2058824,32.1490486 C14.0784819,32.2226033 13.9215181,32.2226033 13.7941176,32.1490486 L0.205882353,24.3038773 C0.0784819096,24.2303226 8.19213978e-15,24.094388 8.19213978e-15,23.9472786 L0,8.25693601 C0,8.10982665 0.0784819096,7.973892 0.205882353,7.90033732 L13.7941176,0.0551660102 C13.9215181,-0.0183886701 14.0784819,-0.0183886701 14.2058824,0.0551660102 Z"
                        id="Polygon" />
                    <path d="M14,8.71231029 L1.22738821,16.1823529 L14,23.6523956 L26.7726118,16.1823529 L14,8.71231029 Z M14.207878,7.87985507 L27.7961133,15.8269139 C28.0679622,15.9859043 28.0679622,16.3788015 27.7961133,16.537792 L14.207878,24.4848508 C14.0794672,24.5599517 13.9205328,24.5599517 13.792122,24.4848508 L0.203886718,16.537792 C-0.0679622395,16.3788015 -0.0679622395,15.9859043 0.203886718,15.8269139 L13.792122,7.87985507 C13.9205328,7.80475419 14.0794672,7.80475419 14.207878,7.87985507 Z"
                        id="Polygon-2" />
                    <path d="M14.0411765,21 C11.3804635,21 9.22352941,18.8430659 9.22352941,16.1823529 C9.22352941,13.5216399 11.3804635,11.3647059 14.0411765,11.3647059 C16.7018895,11.3647059 18.8588235,13.5216399 18.8588235,16.1823529 C18.8588235,18.8430659 16.7018895,21 14.0411765,21 Z M14.0411765,20.1764706 C16.2470667,20.1764706 18.0352941,18.3882432 18.0352941,16.1823529 C18.0352941,13.9764627 16.2470667,12.1882353 14.0411765,12.1882353 C11.8352862,12.1882353 10.0470588,13.9764627 10.0470588,16.1823529 C10.0470588,18.3882432 11.8352862,20.1764706 14.0411765,20.1764706 Z"
                        id="Oval" />
                </g>
                <path d="M39.47,20 L39.47,15.335 L34.67,15.335 L34.67,20 L33.485,20 L33.485,9.8 L34.67,9.725 L34.67,14.39 L39.47,14.39 L39.47,9.8 L40.655,9.8 L40.655,20 L39.47,20 Z M44.015,17.93 C44.015,18.2400016 44.1224989,18.5349986 44.3375,18.815 C44.5525011,19.0950014 44.8999976,19.235 45.38,19.235 C45.8000021,19.235 46.1849982,19.1300011 46.535,18.92 C46.8850018,18.7099989 47.1849987,18.4600015 47.435,18.17 L47.435,16.505 L45.515,16.505 C45.0249976,16.505 44.6525013,16.6474986 44.3975,16.9325 C44.1424987,17.2175014 44.015,17.5499981 44.015,17.93 Z M43.385,13.175 C43.6650014,12.9849991 44.0599974,12.8300006 44.57,12.71 C45.0800026,12.5899994 45.4849985,12.53 45.785,12.53 C46.6250042,12.53 47.3074974,12.7574977 47.8325,13.2125 C48.3575026,13.6675023 48.62,14.2599963 48.62,14.99 L48.62,20 L47.9,20 L47.585,19.265 C47.3349987,19.4950012 47.010002,19.704999 46.61,19.895 C46.209998,20.085001 45.810002,20.18 45.41,20.18 C44.5699958,20.18 43.945002,19.9675021 43.535,19.5425 C43.124998,19.1174979 42.92,18.5800032 42.92,17.93 C42.92,17.2099964 43.1624976,16.6625019 43.6475,16.2875 C44.1325024,15.9124981 44.7649961,15.725 45.545,15.725 L47.42,15.725 C47.42,15.124997 47.3250009,14.6150021 47.135,14.195 C46.944999,13.7749979 46.5100034,13.565 45.83,13.565 C45.3399975,13.565 44.9350016,13.6199995 44.615,13.73 C44.2949984,13.8400005 44.0000013,13.9549994 43.73,14.075 C43.6799998,13.9249993 43.6250003,13.7750008 43.565,13.625 L43.385,13.175 Z M53.84,13.535 C53.0999963,13.535 52.5550018,13.8024973 52.205,14.3375 C51.8549983,14.8725027 51.6750001,15.5349961 51.665,16.325 C51.665,17.1450041 51.8299983,17.8274973 52.16,18.3725 C52.4900017,18.9175027 53.0299963,19.19 53.78,19.19 C54.2700024,19.19 54.6399988,19.1400005 54.89,19.04 C55.1400012,18.9399995 55.4049986,18.8200007 55.685,18.68 L56.045,19.55 C55.7349984,19.750001 55.3600022,19.9074994 54.92,20.0225 C54.4799978,20.1375006 54.1050015,20.195 53.795,20.195 C52.6949945,20.195 51.8625028,19.8350036 51.2975,19.115 C50.7324972,18.3949964 50.45,17.4700057 50.45,16.34 C50.4600001,15.2299944 50.7574971,14.3175036 51.3425,13.6025 C51.9275029,12.8874964 52.7699945,12.53 53.87,12.53 C54.1600014,12.53 54.5274978,12.5874994 54.9725,12.7025 C55.4175022,12.8175006 55.7949985,12.979999 56.105,13.19 L55.745,14.045 C55.4649986,13.9149994 55.1975013,13.7975005 54.9425,13.6925 C54.6874987,13.5874995 54.3200024,13.535 53.84,13.535 Z M59.135,17.27 L59.135,20 L57.95,20 L57.95,9.575 L59.135,9.41 L59.135,15.86 L62.435,12.53 L63.155,13.295 L60.935,15.5 C61.4250025,16.2500037 61.9249975,16.9999962 62.435,17.75 C62.9450025,18.5000037 63.4449975,19.2499962 63.935,20 L62.54,20 C62.139998,19.3799969 61.740002,18.7575031 61.34,18.1325 C60.939998,17.5074969 60.540002,16.8850031 60.14,16.265 L59.135,17.27 Z M68.33,9.8 C69.3800052,9.8 70.2399966,9.99499805 70.91,10.385 C71.5800033,10.7750019 71.915,11.4799949 71.915,12.5 C71.915,12.9800024 71.8000011,13.3899983 71.57,13.73 C71.3399989,14.0700017 71.0350019,14.339999 70.655,14.54 C71.2350029,14.740001 71.7074982,15.0499979 72.0725,15.47 C72.4375018,15.8900021 72.62,16.4449965 72.62,17.135 C72.62,18.1750052 72.2550036,18.9124978 71.525,19.3475 C70.7949963,19.7825022 69.9000053,20 68.84,20 L65.645,20 L65.645,9.8 L68.33,9.8 Z M68.27,10.805 L66.815,10.805 L66.815,14.24 L68.21,14.24 C68.9300036,14.23 69.5249976,14.1050012 69.995,13.865 C70.4650023,13.6249988 70.7,13.1800033 70.7,12.53 C70.7,11.8199964 70.4800022,11.3550011 70.04,11.135 C69.5999978,10.9149989 69.0100037,10.805 68.27,10.805 Z M68.975,15.2 L66.815,15.2 L66.815,19.01 L68.825,19.01 C69.5450036,19.01 70.1549975,18.8775013 70.655,18.6125 C71.1550025,18.3474987 71.405,17.8650035 71.405,17.165 C71.405,16.4749966 71.1850022,15.9750015 70.745,15.665 C70.3049978,15.3549984 69.7150037,15.2 68.975,15.2 Z M74.555,20 L74.555,12.725 L75.275,12.725 L75.635,13.745 C75.9050013,13.5149989 76.2524979,13.2875011 76.6775,13.0625 C77.1025021,12.8374989 77.509998,12.725 77.9,12.725 C77.9400002,12.8850008 77.9849998,13.0424992 78.035,13.1975 C78.0850003,13.3525008 78.1349997,13.5099992 78.185,13.67 C77.7549978,13.67 77.3200022,13.7874988 76.88,14.0225 C76.4399978,14.2575012 76.0600016,14.5349984 75.74,14.855 L75.74,20 L74.555,20 Z M80.195,17.93 C80.195,18.2400016 80.3024989,18.5349986 80.5175,18.815 C80.7325011,19.0950014 81.0799976,19.235 81.56,19.235 C81.9800021,19.235 82.3649982,19.1300011 82.715,18.92 C83.0650018,18.7099989 83.3649988,18.4600015 83.615,18.17 L83.615,16.505 L81.695,16.505 C81.2049976,16.505 80.8325013,16.6474986 80.5775,16.9325 C80.3224987,17.2175014 80.195,17.5499981 80.195,17.93 Z M79.565,13.175 C79.8450014,12.9849991 80.2399975,12.8300006 80.75,12.71 C81.2600025,12.5899994 81.6649985,12.53 81.965,12.53 C82.8050042,12.53 83.4874974,12.7574977 84.0125,13.2125 C84.5375026,13.6675023 84.8,14.2599963 84.8,14.99 L84.8,20 L84.08,20 L83.765,19.265 C83.5149987,19.4950012 83.190002,19.704999 82.79,19.895 C82.389998,20.085001 81.990002,20.18 81.59,20.18 C80.7499958,20.18 80.1250021,19.9675021 79.715,19.5425 C79.304998,19.1174979 79.1,18.5800032 79.1,17.93 C79.1,17.2099964 79.3424976,16.6625019 79.8275,16.2875 C80.3125024,15.9124981 80.9449961,15.725 81.725,15.725 L83.6,15.725 C83.6,15.124997 83.5050009,14.6150021 83.315,14.195 C83.124999,13.7749979 82.6900034,13.565 82.01,13.565 C81.5199975,13.565 81.1150016,13.6199995 80.795,13.73 C80.4749984,13.8400005 80.1800013,13.9549994 79.91,14.075 C79.8599998,13.9249993 79.8050003,13.7750008 79.745,13.625 L79.565,13.175 Z M92.3,13.37 L87.98,19.07 L92.12,19.07 L92.27,20 L86.585,20 L86.42,19.4 L90.68,13.685 L87.065,13.685 L86.795,12.725 L92.24,12.725 L92.3,13.37 Z M94.67,11.285 C94.4399988,11.285 94.2500007,11.2075008 94.1,11.0525 C93.9499993,10.8974992 93.875,10.7050012 93.875,10.475 C93.8649999,10.2549989 93.9374992,10.0675008 94.0925,9.9125 C94.2475008,9.75749923 94.4399988,9.68 94.67,9.68 C94.8900011,9.68 95.0824992,9.75749923 95.2475,9.9125 C95.4125008,10.0675008 95.495,10.2549989 95.495,10.475 C95.495,10.7050012 95.4125008,10.8974992 95.2475,11.0525 C95.0824992,11.2075008 94.8900011,11.285 94.67,11.285 Z M94.085,20 L94.085,12.725 L95.285,12.725 L95.285,20 L94.085,20 Z M97.655,20 L97.655,9.575 L98.84,9.41 L98.84,20 L97.655,20 Z"
                    id="HackBrazil" fill="#000" />
                <path d="M27.5,23.25 L106.5,23.25" id="Line" stroke="#111" strokeLinecap="square"
                />
                <rect id="Rectangle-19" fill="#111" x="103" y="7" width="56" height="17"
                />
                <path d="M119.405,11.315 C120.495005,11.315 121.257498,11.5949972 121.6925,12.155 C122.127502,12.7150028 122.345,13.2899971 122.345,13.88 C122.345,14.4500029 122.160002,14.9774976 121.79,15.4625 C121.419998,15.9475024 120.875004,16.5049968 120.155,17.135 L117.95,19.07 L122.495,19.07 L122.645,20 L116.465,20 L116.465,19.115 L119.51,16.355 C120.140003,15.7849972 120.574999,15.3275017 120.815,14.9825 C121.055001,14.6374983 121.175,14.270002 121.175,13.88 C121.175,13.4199977 121.025002,13.0400015 120.725,12.74 C120.424999,12.4399985 119.975003,12.29 119.375,12.29 C118.904998,12.29 118.457502,12.4099988 118.0325,12.65 C117.607498,12.8900012 117.39,13.015 117.38,13.025 L116.855,12.17 C116.935,12.1199998 117.207498,11.9650013 117.6725,11.705 C118.137502,11.4449987 118.714997,11.315 119.405,11.315 Z M124.295,15.695 C124.295,14.3349932 124.634997,13.2650039 125.315,12.485 C125.995003,11.7049961 126.879995,11.315 127.97,11.315 C129.060005,11.315 129.939997,11.6924962 130.61,12.4475 C131.280003,13.2025038 131.615,14.279993 131.615,15.68 C131.615,17.0400068 131.270003,18.1324959 130.58,18.9575 C129.889997,19.7825041 129.020005,20.195 127.97,20.195 C126.899995,20.195 126.020003,19.795004 125.33,18.995 C124.639997,18.194996 124.295,17.095007 124.295,15.695 Z M125.48,15.65 C125.48,16.7600056 125.714998,17.6249969 126.185,18.245 C126.655002,18.8650031 127.249996,19.175 127.97,19.175 C128.660003,19.175 129.244998,18.8650031 129.725,18.245 C130.205002,17.6249969 130.445,16.7850053 130.445,15.725 C130.445,14.6249945 130.212502,13.7825029 129.7475,13.1975 C129.282498,12.6124971 128.690004,12.32 127.97,12.32 C127.259996,12.32 126.667502,12.6124971 126.1925,13.1975 C125.717498,13.7825029 125.48,14.5999948 125.48,15.65 Z M137.675,20 L133.61,20 L133.475,19.1 L135.08,19.1 L135.08,12.935 C134.909999,13.0550006 134.737501,13.1724994 134.5625,13.2875 C134.387499,13.4025006 134.215001,13.5149995 134.045,13.625 C133.944999,13.4949994 133.85,13.3600007 133.76,13.22 C133.67,13.0799993 133.58,12.9450007 133.49,12.815 L135.485,11.51 L136.28,11.51 L136.28,19.1 L137.555,19.1 C137.575,19.2600008 137.5975,19.4124993 137.6225,19.5575 C137.6475,19.7025007 137.665,19.8499992 137.675,20 Z M139.175,14.42 C139.175,13.619996 139.457497,12.9025032 140.0225,12.2675 C140.587503,11.6324968 141.319996,11.315 142.22,11.315 C143.260005,11.315 144.104997,11.6649965 144.755,12.365 C145.405003,13.0650035 145.73,14.0899932 145.73,15.44 C145.73,16.5400055 145.327504,17.6799941 144.5225,18.86 C143.717496,20.0400059 142.675006,20.7649986 141.395,21.035 L140.87,20.27 C141.770004,20.079999 142.537497,19.6200037 143.1725,18.89 C143.807503,18.1599964 144.219999,17.3650043 144.41,16.505 C144.139999,16.7350012 143.812502,16.9399991 143.4275,17.12 C143.042498,17.3000009 142.650002,17.39 142.25,17.39 C141.299995,17.39 140.550003,17.090003 140,16.49 C139.449997,15.889997 139.175,15.2000039 139.175,14.42 Z M140.315,14.33 C140.315,14.8800028 140.487498,15.3749978 140.8325,15.815 C141.177502,16.2550022 141.649997,16.475 142.25,16.475 C142.790003,16.475 143.262498,16.3400014 143.6675,16.07 C144.072502,15.7999986 144.369999,15.4950017 144.56,15.155 C144.52,14.3049957 144.315002,13.6175026 143.945,13.0925 C143.574998,12.5674974 143.015004,12.305 142.265,12.305 C141.664997,12.305 141.190002,12.5124979 140.84,12.9275 C140.489998,13.3425021 140.315,13.8099974 140.315,14.33 Z"
                    id="2019" fill="#FFF" />
            </g>
        </g>
    </g>
</svg>;

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    onClickMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        let { menuOpen } = this.state;
        /* google forms
        https://goo.gl/forms/kFAs13YK8ZJDxT8e2
        */
        let formsUrl = "https://goo.gl/forms/kFAs13YK8ZJDxT8e2";

        return (<div className="menu-navbar">
            {icon_hack}

            <div className="menu-right">
                <a target="_blank" href={formsUrl}><i class="fas fa-clipboard-check"></i> Reportar Erro / Feedback</a>
            </div>
        </div>)
    }
}