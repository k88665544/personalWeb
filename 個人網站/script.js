var vm = new Vue({
    el: "#app",
    data: {
        isNormalMode: false,
        articlesClass: true,
        articles: [
            {
                articleClass: 'article-1',
                dateClass: 'date-1',
                date: 'June 04, 2020',
                title: '自由自在控制CSS元素 - CSS選取器簡介1',
                contentClass: 'content-1',
                content: '1在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
                browseClass: 'browse-1',
                tagsClass: ['HTML', 'CSS', 'JS'],
                tags: ['HTML', 'CSS', 'JS']
            },
            {
                articleClass: 'article-2',
                dateClass: 'date-2',
                date: 'June 04, 2020',
                title: '自由自在控制CSS元素 - HTML選取器簡介2',
                contentClass: 'content-2',
                content: '2在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
                browseClass: 'browse-2',
                tagsClass: ['HTML', 'CSS', 'JS'],
                tags: ['HTML', 'CSS', 'JS']
            },
            {
                articleClass: 'article-3',
                dateClass: 'date-3',
                date: 'June 04, 2020',
                title: '自由自在控制CSS元素 - CSS選取器簡介3',
                contentClass: 'content-3',
                content: '3在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
                browseClass: 'browse-3',
                tagsClass: ['HTML', 'CSS', 'JS'],
                tags: ['HTML', 'CSS', 'JS']
            },
            {
                articleClass: 'article-4',
                dateClass: 'date-4',
                date: 'June 04, 2020',
                title: '自由自在控制CSS元素 - CSS選取器簡介4',
                contentClass: 'content-4',
                content: '4在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
                browseClass: 'browse-4',
                tagsClass: ['HTML', 'CSS', 'JS'],
                tags: ['HTML', 'CSS', 'JS']
            },
            // {
            //     articleClass: 'article-5',
            //     dateClass: 'date-5',
            //     date: 'June 04, 2020',
            //     title: '5自由自在控制CSS元素 - CSS選取器簡介5',
            //     contentClass: 'content-5',
            //     content: '5在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
            //     browseClass: 'browse-5',
            //     tagsClass: ['HTML', 'CSS', 'JS'],
            //     tags: ['HTML', 'CSS', 'JS']
            // }
        ],
        isSomething: false,
        searchNothing: '沒有找到東西',
        searchInput: ''
    },
    computed: {
        search: function () {
            // 如果有在搜尋欄位打字就要做過濾的動作
            if (this.searchInput) {
                return this.articles.filter(item => { return item.title.toLowerCase().indexOf(this.searchInput.toLowerCase()) != -1 })
            }
            // 那如果有沒在搜尋欄位打字就要給原本data的資料就好
            else {
                return this.articles
            }
        }
    },
    methods: {
        changeUi: function() {
            this.btnClass = 'btn-box-dark'
        }
    }
})

// function pagination(nowPage) {
//     const dataTotal = vm.$data.articles.length
//     console.log(vm.$data.articles.length)
//     const perPage = 4
//     const pageTotal = Math.ceil(dataTotal / perPage)
//     console.log('現在總共有' + dataTotal + '筆資料' + ' ,每一頁4筆' + ' ,所以總共有:' + pageTotal + '頁')

// }
// pagination()