<template>
    <div class="settings__wrapper">
        <div class="settings-nav">
            <div
                v-for="item in navList"
                v-show="item.show"
                :key="item.key"
                :class="{ 'current-block' : item.key == currentBlock }"
                @click="setBlock(item.key)">
                {{ item.name }}
            </div>
        </div>
        <div class="settings__block-container">
            <Block
                v-if=" currentBlock == 'client' "
                key="block_1"
                class="margin-bottom-30"
                title="Client Settings"
                :noGutter="true"
                :onlyContentBg="true"
                :bgGradient="true">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <Toggle
                                :checked="settings.client.openStartup"
                                @change="setOpenStartup(settings.client.openStartup)" />
                            <div class="text">
                                <h4>Open on system startup</h4>
                                <p>
                                    Turn on if you want the application to load automatically
                                    when you turn on your computer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <Toggle
                                :checked="settings.client.systemWarnings"
                                @change="updateClientSettings('systemWarnings')" />
                            <div class="text">
                                <h4>System warnings</h4>
                                <p>Turn on if you want to see system warnings (useful for debugging)</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <Toggle
                                :checked="settings.client.pagination"
                                @change="updateClientSettings('pagination')" />
                            <div class="text">
                                <h4>Pagination mode</h4>
                                <p>Turn on if you want to switch between <i>pagination</i> or <i>load more</i> navigation mode</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <Toggle
                                :checked="systemPermissions"
                                @change="requestNotifPerm()" />
                            <div class="text">
                                <h4>System notifications</h4>
                                <p>Turn on if you want system notifications</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Block>
            <Block
                v-if=" currentBlock == 'sound' "
                key="block_2"
                class="margin-bottom-30"
                title="Sound Settings"
                :noGutter="true"
                :onlyContentBg="true"
                :bgGradient="true">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <Toggle
                                :checked="settings.client.sounds"
                                @change="updateClientSettings('sounds')" />
                            <div class="text">
                                <h4>Sounds</h4>
                                <p>Turn on if you want to enable sounds</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <Toggle
                                :checked="settings.client.interfaceInteractionSounds"
                                @change="updateClientSettings('interfaceInteractionSounds')" />
                            <div class="text">
                                <h4>UI interaction sounds</h4>
                                <p>Turn on if you want to enable UI interaction sounds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Block>
            <Block
                v-if=" currentBlock == 'decentralization' "
                key="block_3"
                v-decentralized-mode
                class="margin-bottom-30"
                title="Decentralization Settings"
                :noGutter="true"
                :onlyContentBg="true"
                :bgGradient="true">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <Toggle
                                :checked="settings.client.ethereumConnection"
                                @change="updateClientSettings('ethereumConnection')" />
                            <div class="text">
                                <h4>Ethereum connection</h4>
                                <p>Turn on if you want the application to enable Ethereum connection</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <Toggle
                                :checked="settings.client.ethereumConnection"
                                @change="updateClientSettings('ethereumConnection')" />
                            <div class="text">
                                <h4>Node opeator (P2P)</h4>
                                <p>Turn on if you want to enable node operator (P2P)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Block>
            <Block
                v-if=" currentBlock == 'performance' "
                key="block_4"
                class="margin-bottom-30"
                title="Performance Settings"
                :noGutter="true"
                :onlyContentBg="true"
                :bgGradient="true">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <Toggle
                                :checked="settings.client.animations"
                                @change="updateClientSettings('animations')" />
                            <div class="text">
                                <h4>UI animations</h4>
                                <p>Turn on if you want to enable animations and transitions</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <Toggle
                                :checked="settings.client.autoplay"
                                @change="updateClientSettings('autoplay')" />
                            <div class="text">
                                <h4>Video auto-play</h4>
                                <p>Turn on if you want to play videos automatically</p>
                            </div>
                        </div>
                    </div>
                    <Benchmark
                        :settings="settings"
                        class="col-12 d-flex justify-content-between align-items-center" />
                </div>
            </Block>
            <Block
                v-if=" currentBlock == 'advanced' "
                key="block_5"
                class="margin-bottom-30"
                title="Advanced"
                :noGutter="true"
                :onlyContentBg="true"
                :bgGradient="true">
                <div class="row">
                    <div class="col-12 d-flex flex-column">
                        <div class="w-100">
                            Advanced settings can be managed here. These are primarily for @Portal developers.
                            <br><strong>Warning:</strong> Only use these if you know what you're doing.
                        </div>
                        <div class="w-100 mt-3">
                            <Button
                                status="warning"
                                @click="clearDatabase">
                                DELETE DATABASE
                            </Button>
                        </div>
                    </div>
                </div>
            </Block>
            <Block
                v-if=" currentBlock == 'game-activity' "
                key="block_6"
                class="margin-bottom-30"
                title="Game Activity"
                :noGutter="true"
                :onlyContentBg="true"
                :bgGradient="true">
                <InlineNotification type="warning">
                    <div class="h4 font-weight-bold p-0 m-0">
                        No game activity!
                    </div>
                    <div class="h5 p-0 m-0">
                        What are you playing!?
                    </div>
                </InlineNotification>
                <div class="h5 margin-top-20">
                    Not seeing your game? <Button status="plain">
                        Add it!
                    </Button>
                </div>
                <div class="margin-top-20">
                    <Toggle label="Display currently running games as a status message" />
                </div>
            </Block>
            <Block
                v-if="currentBlock == 'added-games'"
                key="block_7"
                class="margin-bottom-30"
                title="Added games"
                :noGutter="true"
                :onlyContentBg="true"
                :bgGradient="true">
                <div class="games-list">
                    <div class="games-list__item">
                        <div class="icon">
                            <i class="fas fa-check-circle" />
                        </div>
                        <div>
                            <h3 class="p-0 m-0 text-white">
                                World of Warcraft
                            </h3>
                            <span>Last played 6 hours ago</span>
                        </div>
                    </div>
                    <div class="games-list__item">
                        <div class="icon">
                            <i class="fas fa-check-circle" />
                        </div>
                        <div>
                            <h3 class="p-0 m-0 text-white">
                                Might & Magic: Heroes VI
                            </h3>
                            <span>Last played 2 days ago</span>
                        </div>
                    </div>
                </div>
                <div class="h5 d-none">
                    No added games yet.
                </div>
            </Block>
            <Block
                v-if=" currentBlock == 'language' "
                key="block_8"
                class="margin-bottom-30"
                title="Language Preferences"
                :noGutter="true"
                :onlyContentBg="true"
                :bgGradient="true">
                <h3>Primary language</h3>
                <p>
                    When possible, display content in this language:
                </p>
                <select
                    class="form-control"
                    style="width: 300px">
                    <option
                        v-for="(lang, index) in languages"
                        :id="['select_' + lang.name.toLowerCase() ]"
                        :key="index">
                        {{ lang.nativeName }}
                    </option>
                </select>
                <hr>
                <h3 class="text-white">
                    Secondary Languages
                </h3>
                <p>
                    Additionally, show me content only available on this languages:
                </p>
                <CheckboxGroup>
                    <Checkbox
                        v-for="(lang, index) in languages"
                        :id="lang.name.toLowerCase()"
                        :key="index"
                        class="lang-checkbox">
                        {{ lang.nativeName }}
                    </Checkbox>
                </CheckboxGroup>
                <div class="text-right">
                    <Button
                        status="success"
                        class="margin-top-30">
                        Save
                    </Button>
                </div>
            </Block>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'Benchmark': () => import('../../').then(m => m.Benchmark),
        'InlineNotification': () => import('../../').then(m => m.InlineNotification),
        'Toggle': () => import('../../').then(m => m.Toggle),
        'Checkbox': () => import('../../').then(m => m.Checkbox),
        'CheckboxGroup': () => import('../../').then(m => m.CheckboxGroup)
    },
    data() {
        return {
            navList: [
                {
                    key: 'client',
                    name: 'Client Settings',
                    show: true
                },
                {
                    key: 'sound',
                    name: 'Sound Settings',
                    show: true
                },
                {
                    key: 'decentralization',
                    name: 'Decentralization Settings',
                    show: true
                },
                {
                    key: 'performance',
                    name: 'Performance Settings',
                    show: true
                },
                {
                    key: 'advanced',
                    name: 'Advanced',
                    show: true
                },
                {
                    key: 'game-activity',
                    name: 'Game Activity',
                    show: true
                },
                {
                    key: 'added-games',
                    name: 'Added games',
                    show: true
                },
                {
                    key: 'language',
                    name: 'Language Preferences',
                    show: true
                }
            ],
            systemPermissions: false,
            languages: {
                'ab': {
                    'name': 'Abkhaz',
                    'nativeName': 'аҧсуа'
                },
                'aa': {
                    'name': 'Afar',
                    'nativeName': 'Afaraf'
                },
                'af': {
                    'name': 'Afrikaans',
                    'nativeName': 'Afrikaans'
                },
                'ak': {
                    'name': 'Akan',
                    'nativeName': 'Akan'
                },
                'sq': {
                    'name': 'Albanian',
                    'nativeName': 'Shqip'
                },
                'am': {
                    'name': 'Amharic',
                    'nativeName': 'አማርኛ'
                },
                'ar': {
                    'name': 'Arabic',
                    'nativeName': 'العربية'
                },
                'an': {
                    'name': 'Aragonese',
                    'nativeName': 'Aragonés'
                },
                'hy': {
                    'name': 'Armenian',
                    'nativeName': 'Հայերեն'
                },
                'bs': {
                    'name': 'Bosnian',
                    'nativeName': 'bosanski jezik'
                },
                'br': {
                    'name': 'Breton',
                    'nativeName': 'brezhoneg'
                },
                'bg': {
                    'name': 'Bulgarian',
                    'nativeName': 'български език'
                },
                'my': {
                    'name': 'Burmese',
                    'nativeName': 'ဗမာစာ'
                },
                'ca': {
                    'name': 'Catalan; Valencian',
                    'nativeName': 'Català'
                },
                'ch': {
                    'name': 'Chamorro',
                    'nativeName': 'Chamoru'
                },
                'ce': {
                    'name': 'Chechen',
                    'nativeName': 'нохчийн мотт'
                },
                'ny': {
                    'name': 'Chichewa; Chewa; Nyanja',
                    'nativeName': 'chiCheŵa, chinyanja'
                },
                'zh': {
                    'name': 'Chinese',
                    'nativeName': '中文 (Zhōngwén), 汉语, 漢語'
                },
                'cv': {
                    'name': 'Chuvash',
                    'nativeName': 'чӑваш чӗлхи'
                },
                'kw': {
                    'name': 'Cornish',
                    'nativeName': 'Kernewek'
                },
                'co': {
                    'name': 'Corsican',
                    'nativeName': 'corsu, lingua corsa'
                },
                'cr': {
                    'name': 'Cree',
                    'nativeName': 'ᓀᐦᐃᔭᐍᐏᐣ'
                },
                'hr': {
                    'name': 'Croatian',
                    'nativeName': 'hrvatski'
                },
                'cs': {
                    'name': 'Czech',
                    'nativeName': 'česky, čeština'
                },
                'da': {
                    'name': 'Danish',
                    'nativeName': 'dansk'
                },
                'dv': {
                    'name': 'Divehi; Dhivehi; Maldivian;',
                    'nativeName': 'ދިވެހި'
                },
                'nl': {
                    'name': 'Dutch',
                    'nativeName': 'Nederlands, Vlaams'
                },
                'en': {
                    'name': 'English',
                    'nativeName': 'English'
                },
                'eo': {
                    'name': 'Esperanto',
                    'nativeName': 'Esperanto'
                },
                'et': {
                    'name': 'Estonian',
                    'nativeName': 'eesti, eesti keel'
                },
                'ee': {
                    'name': 'Ewe',
                    'nativeName': 'Eʋegbe'
                },
                'fo': {
                    'name': 'Faroese',
                    'nativeName': 'føroyskt'
                },
                'fj': {
                    'name': 'Fijian',
                    'nativeName': 'vosa Vakaviti'
                },
                'fi': {
                    'name': 'Finnish',
                    'nativeName': 'suomi, suomen kieli'
                },
                'fr': {
                    'name': 'French',
                    'nativeName': 'français, langue française'
                },
                'ff': {
                    'name': 'Fula; Fulah; Pulaar; Pular',
                    'nativeName': 'Fulfulde, Pulaar, Pular'
                },
                'gl': {
                    'name': 'Galician',
                    'nativeName': 'Galego'
                },
                'ka': {
                    'name': 'Georgian',
                    'nativeName': 'ქართული'
                },
                'de': {
                    'name': 'German',
                    'nativeName': 'Deutsch'
                },
                'el': {
                    'name': 'Greek, Modern',
                    'nativeName': 'Ελληνικά'
                },
                'gn': {
                    'name': 'Guaraní',
                    'nativeName': 'Avañeẽ'
                },
                'gu': {
                    'name': 'Gujarati',
                    'nativeName': 'ગુજરાતી'
                },
                'ht': {
                    'name': 'Haitian; Haitian Creole',
                    'nativeName': 'Kreyòl ayisyen'
                },
                'ha': {
                    'name': 'Hausa',
                    'nativeName': 'Hausa, هَوُسَ'
                },
                'he': {
                    'name': 'Hebrew (modern)',
                    'nativeName': 'עברית'
                },
                'hz': {
                    'name': 'Herero',
                    'nativeName': 'Otjiherero'
                },
                'hi': {
                    'name': 'Hindi',
                    'nativeName': 'हिन्दी, हिंदी'
                },
                'ho': {
                    'name': 'Hiri Motu',
                    'nativeName': 'Hiri Motu'
                },
                'hu': {
                    'name': 'Hungarian',
                    'nativeName': 'Magyar'
                },
                'ia': {
                    'name': 'Interlingua',
                    'nativeName': 'Interlingua'
                },
                'id': {
                    'name': 'Indonesian',
                    'nativeName': 'Bahasa Indonesia'
                },
                'ie': {
                    'name': 'Interlingue',
                    'nativeName': 'Originally called Occidental; then Interlingue after WWII'
                },
                'ga': {
                    'name': 'Irish',
                    'nativeName': 'Gaeilge'
                },
                'ig': {
                    'name': 'Igbo',
                    'nativeName': 'Asụsụ Igbo'
                },
                'ik': {
                    'name': 'Inupiaq',
                    'nativeName': 'Iñupiaq, Iñupiatun'
                },
                'io': {
                    'name': 'Ido',
                    'nativeName': 'Ido'
                },
                'is': {
                    'name': 'Icelandic',
                    'nativeName': 'Íslenska'
                },
                'it': {
                    'name': 'Italian',
                    'nativeName': 'Italiano'
                },
                'iu': {
                    'name': 'Inuktitut',
                    'nativeName': 'ᐃᓄᒃᑎᑐᑦ'
                },
                'ja': {
                    'name': 'Japanese',
                    'nativeName': '日本語 (にほんご／にっぽんご)'
                },
                'jv': {
                    'name': 'Javanese',
                    'nativeName': 'basa Jawa'
                },
                'kl': {
                    'name': 'Kalaallisut, Greenlandic',
                    'nativeName': 'kalaallisut, kalaallit oqaasii'
                },
                'kn': {
                    'name': 'Kannada',
                    'nativeName': 'ಕನ್ನಡ'
                },
                'kr': {
                    'name': 'Kanuri',
                    'nativeName': 'Kanuri'
                },
                'ks': {
                    'name': 'Kashmiri',
                    'nativeName': 'कश्मीरी, كشميري‎'
                },
                'kk': {
                    'name': 'Kazakh',
                    'nativeName': 'Қазақ тілі'
                },
                'km': {
                    'name': 'Khmer',
                    'nativeName': 'ភាសាខ្មែរ'
                },
                'ki': {
                    'name': 'Kikuyu, Gikuyu',
                    'nativeName': 'Gĩkũyũ'
                },
                'rw': {
                    'name': 'Kinyarwanda',
                    'nativeName': 'Ikinyarwanda'
                },
                'ky': {
                    'name': 'Kirghiz, Kyrgyz',
                    'nativeName': 'кыргыз тили'
                },
                'kv': {
                    'name': 'Komi',
                    'nativeName': 'коми кыв'
                },
                'kg': {
                    'name': 'Kongo',
                    'nativeName': 'KiKongo'
                },
                'ko': {
                    'name': 'Korean',
                    'nativeName': '한국어 (韓國語), 조선말 (朝鮮語)'
                },
                'ku': {
                    'name': 'Kurdish',
                    'nativeName': 'Kurdî, كوردی‎'
                },
                'kj': {
                    'name': 'Kwanyama, Kuanyama',
                    'nativeName': 'Kuanyama'
                },
                'la': {
                    'name': 'Latin',
                    'nativeName': 'latine, lingua latina'
                },
                'lb': {
                    'name': 'Luxembourgish, Letzeburgesch',
                    'nativeName': 'Lëtzebuergesch'
                },
                'lg': {
                    'name': 'Luganda',
                    'nativeName': 'Luganda'
                },
                'li': {
                    'name': 'Limburgish, Limburgan, Limburger',
                    'nativeName': 'Limburgs'
                },
                'ln': {
                    'name': 'Lingala',
                    'nativeName': 'Lingála'
                },
                'lo': {
                    'name': 'Lao',
                    'nativeName': 'ພາສາລາວ'
                },
                'lt': {
                    'name': 'Lithuanian',
                    'nativeName': 'lietuvių kalba'
                },
                'lu': {
                    'name': 'Luba-Katanga',
                    'nativeName': ''
                },
                'lv': {
                    'name': 'Latvian',
                    'nativeName': 'latviešu valoda'
                },
                'gv': {
                    'name': 'Manx',
                    'nativeName': 'Gaelg, Gailck'
                },
                'mk': {
                    'name': 'Macedonian',
                    'nativeName': 'македонски јазик'
                },
                'mg': {
                    'name': 'Malagasy',
                    'nativeName': 'Malagasy fiteny'
                },
                'ml': {
                    'name': 'Malayalam',
                    'nativeName': 'മലയാളം'
                },
                'mt': {
                    'name': 'Maltese',
                    'nativeName': 'Malti'
                },
                'mi': {
                    'name': 'Māori',
                    'nativeName': 'te reo Māori'
                },
                'mr': {
                    'name': 'Marathi (Marāṭhī)',
                    'nativeName': 'मराठी'
                },
                'mh': {
                    'name': 'Marshallese',
                    'nativeName': 'Kajin M̧ajeļ'
                },
                'mn': {
                    'name': 'Mongolian',
                    'nativeName': 'монгол'
                },
                'na': {
                    'name': 'Nauru',
                    'nativeName': 'Ekakairũ Naoero'
                },
                'nv': {
                    'name': 'Navajo, Navaho',
                    'nativeName': 'Diné bizaad, Dinékʼehǰí'
                },
                'nb': {
                    'name': 'Norwegian Bokmål',
                    'nativeName': 'Norsk bokmål'
                },
                'nd': {
                    'name': 'North Ndebele',
                    'nativeName': 'isiNdebele'
                },
                'ne': {
                    'name': 'Nepali',
                    'nativeName': 'नेपाली'
                },
                'ng': {
                    'name': 'Ndonga',
                    'nativeName': 'Owambo'
                },
                'nn': {
                    'name': 'Norwegian Nynorsk',
                    'nativeName': 'Norsk nynorsk'
                },
                'no': {
                    'name': 'Norwegian',
                    'nativeName': 'Norsk'
                },
                'ii': {
                    'name': 'Nuosu',
                    'nativeName': 'ꆈꌠ꒿ Nuosuhxop'
                },
                'nr': {
                    'name': 'South Ndebele',
                    'nativeName': 'isiNdebele'
                },
                'oc': {
                    'name': 'Occitan',
                    'nativeName': 'Occitan'
                },
                'oj': {
                    'name': 'Ojibwe, Ojibwa',
                    'nativeName': 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
                },
                'om': {
                    'name': 'Oromo',
                    'nativeName': 'Afaan Oromoo'
                },
                'or': {
                    'name': 'Oriya',
                    'nativeName': 'ଓଡ଼ିଆ'
                },
                'os': {
                    'name': 'Ossetian, Ossetic',
                    'nativeName': 'ирон æвзаг'
                },
                'pa': {
                    'name': 'Panjabi, Punjabi',
                    'nativeName': 'ਪੰਜਾਬੀ, پنجابی‎'
                },
                'pi': {
                    'name': 'Pāli',
                    'nativeName': 'पाऴि'
                },
                'fa': {
                    'name': 'Persian',
                    'nativeName': 'فارسی'
                },
                'pl': {
                    'name': 'Polish',
                    'nativeName': 'polski'
                },
                'ps': {
                    'name': 'Pashto, Pushto',
                    'nativeName': 'پښتو'
                },
                'pt': {
                    'name': 'Portuguese',
                    'nativeName': 'Português'
                },
                'qu': {
                    'name': 'Quechua',
                    'nativeName': 'Runa Simi, Kichwa'
                },
                'rm': {
                    'name': 'Romansh',
                    'nativeName': 'rumantsch grischun'
                },
                'rn': {
                    'name': 'Kirundi',
                    'nativeName': 'kiRundi'
                },
                'ro': {
                    'name': 'Romanian, Moldavian, Moldovan',
                    'nativeName': 'română'
                },
                'ru': {
                    'name': 'Russian',
                    'nativeName': 'русский язык'
                },
                'sa': {
                    'name': 'Sanskrit (Saṁskṛta)',
                    'nativeName': 'संस्कृतम्'
                },
                'sc': {
                    'name': 'Sardinian',
                    'nativeName': 'sardu'
                },
                'sd': {
                    'name': 'Sindhi',
                    'nativeName': 'सिन्धी, سنڌي، سندھی‎'
                },
                'se': {
                    'name': 'Northern Sami',
                    'nativeName': 'Davvisámegiella'
                },
                'sm': {
                    'name': 'Samoan',
                    'nativeName': 'gagana faa Samoa'
                },
                'sg': {
                    'name': 'Sango',
                    'nativeName': 'yângâ tî sängö'
                },
                'sr': {
                    'name': 'Serbian',
                    'nativeName': 'српски језик'
                },
                'gd': {
                    'name': 'Scottish Gaelic; Gaelic',
                    'nativeName': 'Gàidhlig'
                },
                'sn': {
                    'name': 'Shona',
                    'nativeName': 'chiShona'
                },
                'si': {
                    'name': 'Sinhala, Sinhalese',
                    'nativeName': 'සිංහල'
                },
                'tt': {
                    'name': 'Tatar',
                    'nativeName': 'татарча, tatarça, تاتارچا‎'
                },
                'tw': {
                    'name': 'Twi',
                    'nativeName': 'Twi'
                },
                'ty': {
                    'name': 'Tahitian',
                    'nativeName': 'Reo Tahiti'
                },
                'ug': {
                    'name': 'Uighur, Uyghur',
                    'nativeName': 'Uyƣurqə, ئۇيغۇرچە‎'
                },
                'uk': {
                    'name': 'Ukrainian',
                    'nativeName': 'українська'
                }
            },
            currentBlock: 'client'
        }
    },
    methods: {
        clearDatabase() {
            window.resetSettings()
        },
        setOpenStartup(value) {
            this.$store.commit('application/updateClientSettings', { key: 'openStartup', value })

            this.$desktop.sendCommand('setOpenStartup', value)
        },
        async requestNotifPerm() {
            const permission = await Notification.requestPermission()
            if (permission === 'granted') this.systemPermissions = true
        },
        setBlock(id) {
            this.currentBlock = id
        }
    },
    computed: {
        settings() {
            return this.$store.state.application.settings
        }
    },
    mounted() {
        this.systemPermissions = Notification.permission === 'granted'
    }
}
</script>

<style lang="scss" scoped>
    .settings__wrapper{
        display: flex;
        justify-content: space-between;
        width: 100%;
        min-height: 500px;
    }
    .settings-nav{
        width: 200px;
        display: flex;
        flex-direction: column;
        padding-right: 20px;
        border-right: 1px solid rgba( 255, 255, 255, .1 );
        div{
            padding: 10px 0;
            color: #fff;
            opacity: .5;
            font-size: 14px;
            &:hover{
                cursor: pointer;
                opacity: 1;
            }
            &.current-block{
                opacity: 1;
            }
        }
    }
    .settings__block-container{
        width: calc( 100% - 220px );
    }

    .settings_item{
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items: flex-start;
        color: #C6C6D6;
        margin-bottom: 30px;
        .switch{
            margin: 1px 10px 0 0;
            padding: 0;
        }
        .text{
            h4{
                font-size: 21px;
                color: #C6C6D6;
                font-weight: bold;
                margin-bottom: 5px;
            }
        }
    }
    .games-list{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .games-list__item{
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        &:last-child{
            padding-bottom: 0;
            margin-bottom: 0;
            border-bottom: unset;
        }
        .icon{
            font-size: 30px;
            color: #43C981;
            margin-right: 15px;
            width: auto;
            height: auto;
        }
    }
    .lang-checkbox{
        width: calc( 100%/4 );
        display: inline-flex!important;
    }
</style>
