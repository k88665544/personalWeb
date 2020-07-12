var vm = new Vue({
  el: '#app',
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
        content:
          '1在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
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
        content:
          '2在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
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
        content:
          '3在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
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
        content:
          '4在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-4',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-5',
        dateClass: 'date-5',
        date: 'June 04, 2020',
        title: '5自由自在控制CSS元素 - CSS選取器簡介5',
        contentClass: 'content-5',
        content:
          '5在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-5',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-6',
        dateClass: 'date-1',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - CSS選取器簡介6',
        contentClass: 'content-1',
        content:
          '1在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-1',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-7',
        dateClass: 'date-2',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - HTML選取器簡介7',
        contentClass: 'content-2',
        content:
          '2在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-2',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-8',
        dateClass: 'date-3',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - CSS選取器簡介8',
        contentClass: 'content-3',
        content:
          '3在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-3',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-9',
        dateClass: 'date-4',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - CSS選取器簡介9',
        contentClass: 'content-4',
        content:
          '4在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-4',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-10',
        dateClass: 'date-5',
        date: 'June 04, 2020',
        title: '5自由自在控制CSS元素 - CSS選取器簡介10',
        contentClass: 'content-5',
        content:
          '5在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-5',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-11',
        dateClass: 'date-1',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - CSS選取器簡介11',
        contentClass: 'content-1',
        content:
          '1在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-1',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-12',
        dateClass: 'date-2',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - HTML選取器簡介12',
        contentClass: 'content-2',
        content:
          '2在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-2',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-13',
        dateClass: 'date-3',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - CSS選取器簡介13',
        contentClass: 'content-3',
        content:
          '3在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-3',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-14',
        dateClass: 'date-4',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - CSS選取器簡介14',
        contentClass: 'content-4',
        content:
          '4在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-4',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-15',
        dateClass: 'date-5',
        date: 'June 04, 2020',
        title: '5自由自在控制CSS元素 - CSS選取器簡介15',
        contentClass: 'content-5',
        content:
          '5在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-5',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-16',
        dateClass: 'date-1',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - CSS選取器簡介16',
        contentClass: 'content-1',
        content:
          '1在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-1',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-17',
        dateClass: 'date-2',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - HTML選取器簡介17',
        contentClass: 'content-2',
        content:
          '2在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-2',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-18',
        dateClass: 'date-3',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - CSS選取器簡介18',
        contentClass: 'content-3',
        content:
          '3在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-3',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-19',
        dateClass: 'date-4',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - CSS選取器簡介19',
        contentClass: 'content-4',
        content:
          '4在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-4',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      },
      {
        articleClass: 'article-20',
        dateClass: 'date-5',
        date: 'June 04, 2020',
        title: '5自由自在控制CSS元素 - CSS選取器簡介20',
        contentClass: 'content-5',
        content:
          '5在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-5',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      }
    ],
    isSomething: false,
    searchNothing: '沒有找到東西',
    searchInput: '',

    // test
    currentPage: 0, // 當前頁數-1
    pageSize: 4, // 每頁4筆
    // totalPage: pageSize / articles.length,
    articleArr: [
      {
        articleClass: 'article-1',
        dateClass: 'date-1',
        date: 'June 04, 2020',
        title: '自由自在控制CSS元素 - CSS選取器簡介1',
        contentClass: 'content-1',
        content:
          '1在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
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
        content:
          '2在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
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
        content:
          '3在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
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
        content:
          '4在 HTML 中，我們有時候會對同一個標籤給予多個 Class 名稱，像是 div class="one two"/div 而在 CSS 裡面則可能同時選擇多個 Class，像是.one.two{} /*兩個 class 中有空格*/ .one.two{} /*兩個 class...在 HTML 中，我們有時候會對同一個標籤給予多個 Class...',
        browseClass: 'browse-4',
        tagsClass: ['HTML', 'CSS', 'JS'],
        tags: ['HTML', 'CSS', 'JS']
      }
    ],
    pageButton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // test
  },
  computed: {
    search: function () {
      // 如果有在搜尋欄位打字就要做過濾的動作
      if (this.searchInput) {
        return this.articles.filter((item) => {
          return item.title.toLowerCase().indexOf(this.searchInput.toLowerCase()) !== -1
        })
      }
      // 那如果有沒在搜尋欄位打字就要給原本data的資料就好
      else {
        return this.articleArr
      }
    },
    totalPage: function () {
      return this.pageSize / this.articles.length
    }
  },
  methods: {
    changeUi: function () {
      this.btnClass = 'btn-box-dark'
    },

    // updatePage: function () {
    //   this.currentPage = pageNumber;
    //   this.updateVisibleTodos();
    // },

    // test
    // prevPage: function () {
    //   console.log("A");
    //   this.currentPage -= 1;
    //   console.log(this.currentPage);
    //   var showArticle = this.articleArr;
    //   showArticle = this.articles.slice(
    //     this.currentPage * this.pageSize,
    //     this.currentPage * this.pageSize + this.pageSize
    //   );
    //   console.log(showArticle);
    //   //   if (this.articleArr.length == 0 && this.currentPage > 0) {
    //   //     this.updatePage(this.currentPage - 1);
    //   //   }
    //   this.articles = showArticle;
    // },
    nextPage: function () {
    //   console.log("B");
    //   console.log(this.pageSize);
    //   console.log(this.articles.length);
      let totalPage = this.articles.length / this.pageSize
      console.log(totalPage)
      if (this.currentPage >= totalPage - 1) {

      } else {
        this.currentPage += 1
        console.log(this.currentPage)
        let showArticle = this.articles.slice(
          this.currentPage * this.pageSize,
          this.currentPage * this.pageSize + this.pageSize
        )
        console.log(showArticle)
        this.articleArr = showArticle
      }
    },
    prevPage: function () {
      //   console.log(this.currentPage);
      if (this.currentPage <= 0) {

      } else {
        console.log('B')
        this.currentPage -= 1
        console.log(this.currentPage)
        let showArticle = this.articles.slice(
          this.currentPage * this.pageSize,
          this.currentPage * this.pageSize + this.pageSize
        )
        console.log(showArticle)
        this.articleArr = showArticle
      }
    }

    // test
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
