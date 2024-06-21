let domain = window.location.origin;
let env = 'beta';
if(domain.includes('localhost:90')){
    env = 'local';
};
const basePath = {
    local: '/static/clients/icc_v3/build',
    prod: '/static-assets/buildv3-prd',
    beta: '/static-assets/buildv3-stg'
};
if(env != 'local'){
    domain = 'https://assets-icc.sportz.io';
};
const initFiles = {
    local: `${basePath[env]}/js/init.js`,
    prod: `${basePath[env]}/js/init.js`,
    beta: `${basePath[env]}/js/init.js`
};
let config = `${basePath[env]}/js/config.json`;
let clientConfig = `${basePath[env]}/js/localClientConfig.json`;

if(env != 'local'){
    config = domain+config;
    clientConfig = domain+clientConfig.replace('localClientConfig', 'clientConfig');
};
const css = [
    // { path: 'all', url: '/css/swiper-bundle.min.css', rel: 'stylesheet'},
    { path: 'all', url: '/css/si-main.css', rel: 'stylesheet', type: 'text/css' }
];
let initApi = initFiles[env];
if(env != 'local'){
    initApi = domain+initApi;
};
const apiCall = async (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json()).then(data => resolve(data))
            .catch(err => reject(err));
    });
}
const vueScript = `https://assets-icc.sportz.io/static-assets/buildv3-${env == 'prod' ? 'prd' : 'stg'}/js/vue3.min.js?v=1`;
const swiperScript = `https://assets-icc.sportz.io/static-assets/buildv3-${env == 'prod' ? 'prd' : 'stg'}/js/swiper-bundle.min.js?v=1.3`;
const loadJsFile = (src) => {
    if (!src.includes('?v=')) {
        let versionToAppend = window.jsversion;
        src += '?v=' + versionToAppend;
    };
    return new Promise((resolve, reject) => {
        let scriptTag = window.document.createElement("script");
        scriptTag.onload = function (data) {
            resolve(data);
        };
        scriptTag.src = src;
        window.document.getElementsByTagName("head")[0].appendChild(scriptTag);
    });
};
loadJsFile(vueScript);
loadJsFile(swiperScript);
let loadCss = function ({rel, type, url}) {
    return new Promise((resolve, reject) => {
        let link = document.createElement('link');
        if(rel){
            link.rel = rel;
        };
        if(type){
            link.type = type;
        };
        link.onload = () => {
            resolve();
            loadFixtureStripShimmer();
            loadFixturePageShimmer();
            loadRankingsStripShimmer();
            loadRankingsPageShimmer();
        };
        link.onerror = () => reject();
        link.href = url;

        let headScript = document.querySelector('script');
        headScript.parentNode.insertBefore(link, headScript);
    });
};

const loadFixtureStripShimmer = () => {
    let wrapperHTML = `
    <div class="si-component si-scorestrip si-shimmer">
        <div class="si-wrapper">
            <div class="si-body">
                <div class="si-card-section swiper">
                    <div class="si-card-list swiper-wrapper">
                        {{REPLACER_ELM}}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    let cardHTML = `
    <div class="si-card-item swiper-slide">
        <div class="si-card-head">
            <div class="si-head-wrap">
                <div class="si-matchinfo">
                    <span class="si-date">-</span> -
                </div>
            </div>
            <div class="si-match-details">
                <span class="si-format"></span>
                <span class="si-text"></span>
            </div>
        </div>
        <div class="si-card-body">
            <div class="si-team-wrapper">
                <div class="si-team si-team-a">
                    <div class="si-team-info">
                        <!-- <img class="si-team-logo" src="" loading="lazy" alt="" /> -->
                        <h3 class="si-team-name">
                            <span class="si-fname si-name">Loading</span>
                            <span class="si-sname si-name">Loading</span>
                        </h3>
                    </div>
                    <div class="si-team-data-wrap">
                        <div class="si-team-data">
                            <div class="si-team-score">
                                <span class="si-score si-no-score">Loading
                                </span>
                            </div>
                            <div class="si-team-extra">
                                <span class="si-overs"></span>
                            </div>
                            <div class="si-team-extra">
                                <span class="si-overs"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="si-card-label"></span>
                <div class="si-team si-team-b" class="">
                    <div class="si-team-info">
                        <!-- <img class="si-team-logo" src="" loading="lazy" alt="" /> -->
                        <h3 class="si-team-name">
                            <span class="si-fname si-name">Loading</span>
                            <span class="si-sname si-name">Loading</span>
                        </h3>
                    </div>
                    <div class="si-team-data-wrap">
                        <div class="si-team-data">
                            <div class="si-team-score">
                                <span class="si-score si-no-score">Loading
                                </span>
                            </div>
                            <div class="si-team-extra">
                                <span class="si-overs"></span>
                            </div>
                            <div class="si-team-extra">
                                <span class="si-overs"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="si-card-text">
                <p class="si-match-status"></p>
            </div>
            <div class="si-card-footer">
                <a href="javascript:void(0)" title="highlights" class="si-btn-site">
                    <span class="si-btn-text"></span>
                </a>
                <a href="javascript:void(0)" title="match report" class="si-btn-site">
                    <span class="si-btn-text">Match center</span>
                </a>
            </div>
        </div>
    </div>
    `;
    Array.from(Array(3)).forEach(i => {
        cardHTML += cardHTML;
    });
    wrapperHTML = wrapperHTML.replace('{{REPLACER_ELM}}', cardHTML);
    const selectorStr = `[data-wdtype="fixtures"][data-viewtype="strip"]`;
    const elms = document.querySelectorAll(selectorStr);
    if(elms.length){
        for(let i = 0; i < elms.length; i++){
            elms[i].innerHTML = wrapperHTML;
        };
    };
};

const loadFixturePageShimmer = () => {
    let wrapperHTML = `
    <div class="si-component si-fixtures si-shimmer">
        <div class="si-wrapper">
            <div class="si-body">
                <div class="si-tab-container-wrap">
                    <div class="si-tab-container-item">
                        <div class="si-tab-card-section">
                            <h3 class="si-title"></h3>
                            <div class="si-card-list">
                                {{REPLACER_ELM}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    let cardHTML = `
    <div class="si-card-item">
        <div class="si-card-head">
            <div class="si-card-format-wrap">
                <span class="si-card-format">loading</span>
                <span
                    class="si-card-status">loading</span>
            </div>
            <div class="si-card-info">
                <span class="si-card-date">loading</span>
                <span class="si-card-match-info">loading</span>
            </div>
            <span class="si-card-venue">loading</span>
        </div>
        <div class="si-card-body">
            <div class="si-team si-team-a">
                <div class="si-team-info">
                    <img class="si-team-logo" loading="lazy" alt=""
                        src="https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/1789.png?v=1">
                    <h3 class="si-team-name">
                        <span class="si-fname si-name">loading</span>
                        <span class="si-sname si-name">loading</span>
                    </h3>
                </div>
                <div class="si-team-score-wrap">
                    <span class="si-team-score si-no-score">loading</span>
                </div>
            </div>
            <div class="si-team si-team-b">
                <div class="si-team-info">
                    <img class="si-team-logo" loading="lazy" alt=""
                        src="https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/1789.png?v=1">
                    <h3 class="si-team-name">
                        <span class="si-fname si-name">loading</span>
                        <span class="si-sname si-name">loading</span>
                    </h3>
                </div>
                <div class="si-team-score-wrap">
                    <span class="si-team-score si-no-score">loading</span>
                </div>
            </div>
            <span class="si-card-result">
                loading
            </span>
        </div>
        <div class="si-card-footer">
            <a href="javascript:void(0)" title="highlights"
                class="si-btn-matchcenter si-btn-site">
                <span class="si-btn-text">Highlights</span>
            </a>
            <a href="javascript:void(0)" title="match report"
                class="si-btn-matchcenter si-btn-site">
                <span class="si-btn-text">Match center</span>
            </a>
        </div>
    </div>
    `;
    Array.from(Array(3)).forEach(i => {
        cardHTML += cardHTML;
    });
    wrapperHTML = wrapperHTML.replace('{{REPLACER_ELM}}', cardHTML);
    const selectorStr = `[data-wdtype="fixtures"][data-viewtype="page"]`;
    const elms = document.querySelectorAll(selectorStr);
    if(elms.length){
        for(let i = 0; i < elms.length; i++){
            elms[i].innerHTML = wrapperHTML;
        };
    };
};

const loadRankingsStripShimmer = () => {
    let wrapperHTML = `
    <div class="si-component si-standings si-player-ranking si-shimmer">
        <div class="si-body">
            <div class="si-table-section swiper">
                <div class="swiper-wrapper">
                    {{REPLACE_CARD_ELM}}
                </div>
            </div>
        </div>
    </div>
    `;
    const cardMK = `
    <div class="si-table swiper-slide">
        <div class="si-table-head">
            <h4 class="si-table-title">
                <em></em> -
            </h4>
            <div class="si-social-share">
                <button class="si-share-icon" type="button" aria-label="Share" aria-expanded="false"
                    aria-haspopup="true">
                    <i class="si-icon-b-share">Loading</i>
                </button>
                <div class="si-social-share-wrap">
                    <div class="si-social-wrap">
                        <span class="si-share-label">Share</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="si-table-body">
            {{REPLACE_ROW_ELM}}
        </div>
        <div class="si-table-footer">
            <a href="javascript:void(0)" class="si-btn-site" target="_blank" title="ranking">
                <span class="si-text">Loading</span>
            </a>
        </div>
    </div>
    `;
    const rowMK = `
    <div class="si-table-row">
        <div class="si-table-data si-pos">
            <span class="si-text">Loading</span>
            <span class="si-range">Loading</span>
        </div>
        <div class="si-table-data si-player">
            <div class="si-table-data-wrap">
                <img src="https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/7.png?v=1" class="si-logo">
                <div class="si-player-info">
                    <h3 class="si-player-name">
                        <span class="si-country"></span>
                    </h3>
                </div>
            </div>
        </div>
        <div class="si-table-data si-points">
            <span class="si-text">Loading</span>
        </div>
    </div>
    `;
    let cardHTML = '', rowHTML = '';
    Array.from(Array(5)).forEach(i => {
        rowHTML += rowMK;
    });
    Array.from(Array(3)).forEach(i => {
        cardHTML += cardMK.replace('{{REPLACE_ROW_ELM}}', rowHTML);
    });
    wrapperHTML = wrapperHTML.replace('{{REPLACE_CARD_ELM}}', cardHTML);
    const selectorStr = `[data-wdtype="rankings"][data-viewtype="strip"]`;
    const elms = document.querySelectorAll(selectorStr);
    if(elms.length){
        for(let i = 0; i < elms.length; i++){
            elms[i].innerHTML = wrapperHTML;
        };
    };
};

const loadRankingsPageShimmer = () => {
    let wrapperHTML = `
    <div class="si-component si-raking-detail si-player-ranking si-shimmer">
        <div class="si-body">
            <div class="si-table-section">
                <div class="si-table-responsive">
                    <div class="si-table">
                        <div class="si-table-head">
                            <div class="si-table-row">
                                <div class="si-table-data si-pos">
                                    <span class="si-text">pos</span>
                                    <span class="si-range"></span>
                                </div>
                                <div class="si-table-data si-team">
                                    <span class="si-text">Team</span>
                                </div>
                                <div v-if="getWidgetType" class="si-table-data si-player">
                                    <span class="si-text">matches</span>
                                </div>
                                <div v-if="!getWidgetType" class="si-table-data si-player">
                                    <span class="si-text">players</span>
                                </div>
                                <div v-if="getWidgetType" class="si-table-data si-player">
                                    <span class="si-text">pts</span>
                                </div>
                                <div class="si-table-data si-rating">
                                    <span class="si-text">rating</span>
                                </div>
                                <div v-if="!getWidgetType" class="si-table-data si-best">
                                    <span class="si-text">Career Best Rating</span>
                                </div>
                            </div>
                        </div>
                        <div class="si-table-body">
                            {{REPLACE_ROW_ELM}}
                        </div>
                        <div class="si-table-footer">
                            <button aria-label="" class="si-btn-site" aria-expanded="false">
                                <span class="si-btn-text">Load More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    const rowMK = `
    <div class="si-table-row">
        <div class="si-table-data si-pos">
            <span class="si-text">Loading</span>
            <span class="si-range">Loading</span>
        </div>
        <div class="si-table-data si-team">
            <div class="si-table-data-wrap">
                <div class="si-team-logo">
                </div>
                <h3 class="si-team-name">
                    <span class="si-sname si-text">Loading</span>
                    <span class="si-fname si-text">Loading</span>
                </h3>
            </div>
        </div>
        <div class="si-table-data si-player">
            <div class="si-player-info">
                <h3 class="si-player-name">
                    <span class="si-text si-fname">Loading</span>
                    <span class="si-text si-lname">Loading</span>
                </h3>
                <div class="si-player-image">
                </div>
            </div>
        </div>
        <div class="si-table-data si-matches">
            <span class="si-text">Loading</span>
        </div>
        <div class="si-table-data si-pts">
            <span class="si-text">Loading</span>
        </div>
            <div class="si-table-data si-rating">
                <span class="si-text">Loading</span>
            </div>
            <div v-else class="si-table-data si-rating">
                <span class="si-text">Loading</span>
            </div>
        <div class="si-table-data si-best">
            <span class="si-text"></span>
        </div>
    </div>
    `;
    let rowHTML = '';
    Array.from(Array(10)).forEach(i => {
        rowHTML += rowMK;
    });
    wrapperHTML = wrapperHTML.replace('{{REPLACE_ROW_ELM}}', rowHTML);
    const selectorStr = `[data-wdtype="rankings"][data-viewtype="page"]`;
    const elms = document.querySelectorAll(selectorStr);
    if(elms.length){
        for(let i = 0; i < elms.length; i++){
            elms[i].innerHTML = wrapperHTML;
        };
    };
};

const main = async () => {
    let configRes = { configRes: { siFileVersion: undefined } };
    try {
        if (env !== 'local') {
            // configRes = await apiCall(config);
            const resps = await Promise.allSettled([apiCall(config), apiCall(clientConfig)]);
            if(resps.find(x => x.status == 'rejected')){
                console.log('NO CONFIG');
                return;
            };
            configRes = resps[0].value;
            window.clientConfig = resps[1].value;
        }else {
            const resp = await apiCall(clientConfig);
            window.clientConfig = resp;
        };
        window.jsversion = configRes.siFileVersion;
        loadJsFile(initApi);
        const fixturePageElms = document.querySelectorAll('[data-wdtype="fixtures"][data-viewtype="page"]');
        if(fixturePageElms.length){
            loadJsFile(`https://assets-icc.sportz.io/static-assets/buildv3-${env == 'prod' ? 'prd' : 'stg'}/js/flatpicker.js?v=${window.jsversion}`)
        };
        css.forEach(cssObj => {
            if (cssObj.path === 'all' || window.location.pathname.includes(cssObj.path)) {
                let url = `${env === 'local' ? basePath.beta : basePath[env]}${cssObj.url}?v=${window.jsversion}`;
                url = domain+url;
                loadCss({...cssObj, url});
            };
        });
    } catch (err) {
        console.log(err);
        return err;
    }
};

main();