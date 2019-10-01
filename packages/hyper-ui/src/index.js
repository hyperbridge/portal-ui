import * as directives from './directives'
import Vue from 'vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'



export const Swiper = swiper
export const SwiperSlide = swiperSlide

export const ActivityBlock = require('./components/activity-block')
export const ActivityChart = require('./components/activity-chart')
export const AddCollectionPopup = null
export const AddFriends = null
export const AddFriendsPopup = require('./components/add-friends')
export const AnnouncementPopup = require('./components/announcement-popup')
export const ArrayView = require('./components/json-editor/array-view')
export const AssetPopup = require('./components/asset-overview-popup')
export const AssetsGrid = require('./components/assets-grid')
export const AssetsImporter = require('./components/asset-importer')
export const AssetsList = require('./components/assets-list-item/featured-list')
export const AssetsListDetail = require('./components/assets-list-item')
export const AssetsPreview = require('./components/asset/preview')
export const AssetsStoreCard = require('./components/asset/store-card')
export const Author = require('./components/author')
export const Badges = require('./components/project/badges')
export const Banner = require('./components/banner')
export const BasicPopup = require('./components/popups/basic')
export const Benchmark = require('./components/benchmark')
export const Block = require('./components/block')
export const Breadcrumb = require('./components/breadcrumb')
export const BrokenPage = require('./components/broken-page')
export const BrowserUi = require('./components/browser-ui')
export const Button = require('./components/buttons')
export const ButtonFav = require('./components/buttons/favorite')
export const ButtonArrows = require('./components/buttons/arrows')
export const Buttons = require('./components/buttons')
export const Card = require('./components/project/card')
export const Carousel3d = require('./components/carousel-3d')
export const Chat = require('./components/chat/chat')
export const ChatAnswer = require('./components/chat-new/answer-field/field')
export const ChatBase = require('./components/chat-new/base')
export const ChatFriendsList = null
export const ChatGroup = require('./components/chat-new/content/group')
export const ChatGroupNew = null
export const ChatGroupSidebar = require('./components/chat-new/content/group-list')
export const ChatGroupWelcome = null
export const ChatMessage = require('./components/chat-new/message')
export const ChatMessageSmall = require('./components/chat-new/message-small')
export const ChatPrivate = null
export const ChatUser = require('./components/chat-new/user')
export const Checkbox = require('./components/checkbox')
export const CheckboxGroup = require('./components/checkbox/group')
export const Claim = require('./components/curator-panel/claim')
export const Clock = require('./components/clock')
export const CollectionItem = require('./components/collection/item')
export const CollectionList = require('./components/collection/list')
export const CommunitySpotlight = require('./components/community-spotlight')
export const ContentNavigation = null
export const ContributeForm = require('./components/contribute/form')
export const ContributePledge = require('./components/contribute/pledge')
export const ContributorBox = require('./components/contributor-box')
export const CookiePolicy = require('./components/cookie-policy')
export const CuratorInfo = require('./components/curator-panel/info-card')
export const CuratorPanel = require('./components/curator-panel')
export const CuratorReview = require('./components/curator-review')
export const CuratorReviews = null
export const CuratorsReviews = require('./components/curator-reviews')
export const CurrencyDropdown = require('./components/dropdown-menu/currency')
export const CustomModal = require('./components/modal/custom')
export const DecentralizationMeter = require('./components/decentralization-meter')
export const DottedList = require('./components/list/dots')
export const DraggableVideo = require('./components/draggable-video')
export const Dropdown = require('./components/dropdown-menu/type-2')
export const Dropdown4 = require('./components/dropdown-menu/type-4')
export const DropdownCurrency = require('./components/dropdown-menu/currency')
export const DropdownCustom = require('./components/dropdown-menu/type-3')
export const DropdownLang = require('./components/dropdown-menu/language')
export const DropdownMenu = require('./components/dropdown-menu/type-2')
export const DropdownPost = require('./components/dropdown-menu')
export const Emoji = require('./components/emoji')
export const EmojiSingle = require('./components/emoji/single')
export const ExchangeBar = require('./components/exchange-bar')
export const FTradedAssets = require('./components/frequently-traded-assets')
export const GameCard = require('./components/game-card')
export const GameDescription = require('./components/game-series/game-description')
export const GameIncludesItem = require('./components/game-series/game-includes-item')
export const GameIncludesList = require('./components/game-series/game-includes-list')
export const GameInstaller = null
export const GameInstallerModal = require('./components/game-installer')
export const GameLibraryCard = null
export const GamePlan = require('./components/game-plans/plan')
export const GameSeries = require('./components/game-series')
export const GamesExplorer = require('./components/games-explorer')
export const GamesGrid = require('./components/game-grid/with-description')
export const GamesGridSimple = require('./components/game-grid/simple')
export const GamesList = null
export const Giphy = require('./components/giphy')
export const GlobalSearch = require('./components/global-search')
export const Guide = require('./components/guide')
export const HeadingBar = require('./components/heading-bar')
export const HeadingBarWithAdditionalAction = require('./components/heading-bar/additional-action')
export const HeadingBarWithSimpleColor = require('./components/heading-bar/simple-colored')
export const Icon = require('./components/icon')
export const ImagesExplorer = require('./components/images-explorer')
export const Img = require('./components/img')
export const Input = require('./components/inputs')
export const InputSearcher = require('./components/inputs/searcher')
export const JoinCommunity = require('./components/join-community')
export const JsonView = require('./components/json-editor/json-view')
export const Landing = require('./components/landing')
export const LandingBenefactor = require('./components/landing/block-content/benefactor')
export const LandingBlock = null
export const LandingBlockContentLevel = require('./components/landing/block-content/level')
export const LandingBlockContentWithFeatureItem = require('./components/landing/block-content/feature-item')
export const LandingBlockTitle = require('./components/landing/block-title/simple')
export const LandingBlockTitleGradient = require('./components/landing/block-title/gradient')
export const LandingBlockTitleShadow = require('./components/landing/block-title/shadow')
export const LandingButton = null
export const LandingContent = require('./components/landing/block-content/simple')
export const LandingDivider = require('./components/landing/block-content/divider')
export const LandingFeatureItem = null
export const LandingGradientBlock = null
export const LandingLevel = require('./components/landing/block-content/level')
export const LandingRewardList = require('./components/landing/block-content/reward-list')
export const LandingSlider = null
export const LandingTab = require('./components/landing/block-content/tab')
export const LandingTabs = require('./components/landing/block-content/tabs')
export const LandingTitle = require('./components/landing/block-title/simple')
export const LandingTitleGradient = require('./components/landing/block-title/gradient')
export const LandingTitleShadow = require('./components/landing/block-title/shadow')
export const LanguageSupport = require('./components/product-overview/language-support')
export const LanguagesDropdown = null
export const LineChart = require('./components/charts/line')
export const LoadMore = require('./components/buttons/load-more')
export const LoadingCircle = require('./components/loading-bar/circle')
export const LoadingIndicator = require('./components/loading-indicator')
export const LoadingLine = require('./components/loading-bar')
export const LogoLoader = require('./components/loading-bar/logo-loader')
export const MetroGrid = require('./components/metro/grid')
export const MetroItem = require('./components/metro/metro-item')
export const MetroTile = require('./components/metro/metro-tile')
export const Milestone = require('./components/project/milestone')
export const MilestonesLine = require('./components/milestones-line')
export const Modal = require('./components/modal/')
export const ModalList = null
export const MoneyInfo = require('./components/money-info')
export const NewsArticle = require('./components/news-list/article')
export const NewsList = require('./components/news-list/articles')
export const NewsListNav = require('./components/news-list/navigation')
export const NewsListNavigation = null
export const Notification = require('./components/notification')
export const NotificationInline = require('./components/notification/inline')
export const OptionBlock = null
export const Pagination = require('./components/pagination/index')
export const ParticipationTier = require('./components/participation-tier')
export const PlayPopup = null
export const Popup = require('./components/popups')
export const PricingTableV1 = require('./components/pricing-table/v1')
export const PricingTableV2 = require('./components/pricing-table/v2')
export const ProModeButton = require('./components/pro-mode/button')
export const ProModeN1 = require('./components/pro-mode/notice1')
export const ProModeN2 = require('./components/pro-mode/notice2')
export const ProductCard = require('./components/product-card/product-card')
export const ProductCardDynamic = require('./components/product-card/product-card-dynamic')
export const ProductCommunity = require('./components/community/post-item')
export const ProductCommunityComment = require('./components/community/comment')
export const ProductCommunityPost = null
export const ProductCommunityReply = require('./components/community/reply')
export const ProductReview = require('./components/review')
export const ProductReviewForm = require('./components/review/create')
export const ProductsCards = require('./components/product-card/product-cards')
export const ProfileChooser = require('./components/profile-chooser')
export const ProfilePicker = require('./components/profile-picker')
export const ProgressBar = require('./components/progress-bar')
export const ProgressBarFancy = require('./components/progress-bar/fancy')
export const ProjectCard = require('./components/project/card')
export const ProjectMilestone = require('./components/project/milestone')
export const PromotionBoxItem = require('./components/promotion-box/item')
export const PromotionBoxList = require('./components/promotion-box/list')
export const PurchaseBlock = require('./components/purchase-block')
export const PurchaseOption = require('./components/purchase-option')
export const QrCode = require('./components/qr-code')
export const QuickLaunch = require('./components/quick-launch')
export const RangeSlider = require('./components/range-slider/pure')
export const RatingBlock = require('./components/rating-block')
export const RatingStars = require('./components/rating-stars')
export const RenderCondition = require('./components/render-condition')
export const Review = require('./components/review')
export const ReviewForm = null
export const ScreenGallery = require('./components/screen-gallery/gallery')
export const ScrollableContent = require('./components/chat-new/content/scrollable-content')
export const SearchBar = null
export const Searcher = require('./components/searcher')
export const SecurityCheck = require('./components/security-check')
export const SendingFundsPopup = null
export const Settings = require('./components/settings')
export const Share = require('./components/share/type-1')
export const SidebarMenu = require('./components/sidebar-menu')
export const SidebarMenuItem = require('./components/sidebar-menu/menu-item')
export const SimpleBanner = require('./components/banner/simple')
export const SimpleBlock = require('./components/block/simple')
export const SimpleTable = require('./components/table-simple')
export const Slide = null
export const SocialConnect = require('./components/social-connect')
export const Spinner = require('./components/spinner')
export const StatusDot = require('./components/status-dot')
export const StreamCarousel = require('./components/stream/carousel')
export const StreamItem = require('./components/stream')
export const SystemRequirements = require('./components/product-overview/system-requirements')
export const Tab = require('./components/tab/tab')
export const Tabs = require('./components/tab/tabs')
export const Tags = require('./components/tags')
export const TagsCount = require('./components/tags/count')
export const TermsPopup = require('./components/popups/terms')
export const TextFormatting = require('./components/text-formatting')
export const TextLabel = require('./components/text-label')
export const TimelineItem = require('./components/timeline/item')
export const TimelineList = require('./components/timeline/list')
export const Toggle = require('./components/toggle')
export const Tooltip = require('./components/tooltips/universal')
export const TooltipUniversal = require('./components/tooltips/universal')
export const Tooltips = require('./components/tooltips')
export const TradeOffer = require('./components/trade-offer')
export const TradedAssets = null
export const Twitch = require('./components/twitch')
export const UpdatesCount = require('./components/project/updates-count')
export const UserCard = require('./components/user-card')
export const Video = require('./components/video')
export const VideoList = require('./components/video-list')
export const ViewReview = null
export const Vote = require('./components/vote')
export const WalletDeposit = require('./components/wallet/deposit')
export const WalletTransfer = require('./components/wallet/transfer')
export const WelcomeBox = require('./components/welcome-box')
export const Youtube = require('./components/youtube')


export const Header = require('./components/headers/basic')
export const SlimHeader = require('./components/headers/slim')

export const PrivacyPopup = require('./components/privacy-popup')
export const WelcomePopup = require('./components/welcome-popup')
export const DownloadPopup = require('./components/download-popup')
export const UnlockPopup = require('./components/unlock-popup')
export const LoginPopup = require('./components/login-popup')
export const RegisterPopup = require('./components/register-popup')
export const SendFundsPopup = require('./components/send-funds-popup')
export const PurchasePopup = require('./components/purchase-popup')
export const MissionControlPopup = require('./components/mission-control-popup')
export const Sidepanel = require('./components/sidepanel')
export const ShortcutSidebar = require('./components/shortcut-sidebar')
export const ShortcutIcon = require('./components/shortcut-icon')
export const ShortcutGrid = require('./components/shortcut-grid')
export const ShortcutGridItem = require('./components/shortcut-grid-item')


export const LoadingLogo = require('./components/loading-bar/logo-loader')
export const LanguageDropdown = require('./components/dropdown-menu/language')

export const CryptoIcon = require('./components/icon/crypto')

export const ImageOverlay = require('./components/image-overlay')
export const ProductCards = require('./components/product-card/product-cards')
export const ProductSlider = require('./components/product-slider')
export const GameGrid = require('./components/game-grid/simple')
export const AssetsListItem = require('./components/assets-list-item')
export const NewsListArticles = require('./components/news-list/articles')
export const AssetsExplorer = require('./components/assets-explorer')
export const DownloadBlock = require('./components/download-block')
export const HeadingBarFields = require('./components/heading-bar')
export const TermsBlock = require('./components/heading-bar')
export const PrivacyBlock = require('./components/heading-bar')
export const Message = require('./components/message')
export const Drawer = require('./components/drawer')
export const ScrollTable = require('./components/scroll-table')
// export const Switch = require('./components/switch')






//BlockContentWithFeatureItem': () => import('~/components/landing / block - content / feature - item').then(m => m.default),
// 'c-header': () => import('~/components/headers/basic').then(m => m.default || m),
// 'c-slim-header': () => import('~/components/headers/slim').then(m => m.default || m),
// 'c-popup': () => import('@ericmuyser/hyper-ui').then(m => m.default || m),
// 'c-basic-popup': () => import('~/components/popups/basic').then(m => m.default || m),
// 'c-custom-modal': () => import('~/components/modal/custom').then(m => m.default || m),
// 'c-terms-popup': () => import('~/components/terms-popup').then(m => m.default || m),
// 'c-privacy-popup': () => import('~/components/privacy-popup').then(m => m.default || m),
// 'c-collection-navigation': () => import('~/components/navigation/collection').then(m => m.default || m),
// 'c-wallet-navigation': () => import('~/components/navigation/wallet').then(m => m.default || m),
// 'c-account-navigation': () => import('~/components/navigation/account').then(m => m.default || m),
// 'c-settings-navigation': () => import('~/components/navigation/settings').then(m => m.default || m),
// 'c-help-navigation': () => import('~/components/navigation/help').then(m => m.default || m),
// 'c-funding-navigation': () => import('~/components/navigation/funding').then(m => m.default || m),
// 'c-store-navigation': () => import('~/components/navigation/store').then(m => m.default || m),
// 'c-asset-navigation': () => import('~/components/navigation/asset').then(m => m.default || m),
// 'c-product-navigation': () => import('~/components/navigation/product').then(m => m.default || m),
// 'c-project-navigation': () => import('~/components/navigation/project').then(m => m.default || m),
// 'c-chat-navigation': () => import('~/components/navigation/chat').then(m => m.default || m),
// 'c-idea-navigation': () => import('~/components/navigation/idea').then(m => m.default || m),
// 'c-community-navigation': () => import('~/components/navigation/community').then(m => m.default || m),
// 'c-welcome-popup': () => import('~/components/welcome-popup').then(m => m.default || m),
// 'c-download-popup': () => import('~/components/download-popup').then(m => m.default || m),
// 'c-unlock-popup': () => import('~/components/unlock-popup').then(m => m.default || m),
// 'c-claim-popup': () => import('~/components/claim-popup').then(m => m.default || m),
// 'c-login-popup': () => import('~/components/login-popup').then(m => m.default || m),
// 'c-register-popup': () => import('~/components/register-popup').then(m => m.default || m),
// 'c-send-funds-popup': () => import('~/components/send-funds-popup').then(m => m.default || m),
// 'c-purchase-popup': () => import('~/components/purchase-popup').then(m => m.default || m),
// 'c-mission-control-popup': () => import('~/components/mission-control-popup').then(m => m.default || m),
// 'c-add-collection-popup': () => import('~/components/popups/add-collection').then(m => m.default || m),
// 'c-user-card': () => import('~/components/user-card').then(m => m.default || m),
// 'c-clock': () => import('~/components/clock').then(m => m.default || m),
// 'c-status-dot': () => import('~/components/status-dot').then(m => m.default || m),
// 'c-sidepanel': () => import('~/components/sidepanel').then(m => m.default || m),
// 'c-cookie-policy': () => import('~/components/cookie-policy').then(m => m.default || m),
// 'c-qr-code': () => import('~/components/qr-code').then(m => m.default || m),
// 'c-shortcut-sidebar': () => import('~/components/shortcut-sidebar').then(m => m.default || m),
// 'c-load-more': () => import('~/components/buttons/load-more').then(m => m.default || m),
// 'c-sidebar-menu-link': () => import('~/components/sidebar-menu/menu-item').then(m => m.default || m),
// 'c-profile-chooser': () => import('~/components/profile-chooser').then(m => m.default || m),
// 'c-settings': () => import('~/components/settings').then(m => m.default || m),
// 'c-social-connect': () => import('~/components/social-connect').then(m => m.default || m),
// 'c-draggable-video': () => import('~/components/draggable-video').then(m => m.default || m),
// 'c-video': () => import('~/components/draggable-video').then(m => m.default || m)
// import HeadingBar from '@/components/heading-bar/simple-colored'
// import DottedList from '@/components/list/dots'
// Layout from '../components/front-layout'
// HeadingBar from '../components/heading-bar'
// HeadingBarWithSimpleColor from '../components/heading-bar/simple-colored'
// Button from '../components/buttons'
// Block from '../components/block'
// Switch from '../components/switch'
// Checkbox from '../components/checkbox'
// InfiniteContent from '../components/infinite-content'
// Icon from '../components/icon'
// Input from '../components/inputs'
// InputSearcher from '../components/inputs/searcher'
// LoadingIndicator from '../components/loading-indicator'
// Breadcrumb from '../components/breadcrumb'
// Img from '../components/img'
// Access from '../components/access'
// Vote from '../components/vote'
// JsonView from '../components/json-editor/json-view'
// ArrayView from '../components/json-editor/array-view'
// Spinner from '../components/spinner'
// Tabs from '../components/tab/tabs'
// Tab from '../components/tab/tab'
// import HeadingBar from '@/components/heading-bar/simple-colored'
// import DottedList from '@/components/list/dots'
