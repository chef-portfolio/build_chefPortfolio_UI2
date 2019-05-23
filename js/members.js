class Tabs{
    constructor(item){
        this.tabs = item;
        this.list = [...document.querySelectorAll('li')];
        this.list.forEach(item => new Tab(item));
    }
}

class Tab{
    constructor(item){
        this.tab = item;
        this.data = item.dataset.tab;
        this.cards = document.querySelectorAll(`div[data-tab="${this.data}"]`)
        this.tab.addEventListener('click', () => this.select());
        this.allCards = document.querySelectorAll('.member-card > div');
    }

    select(){
        console.log('test');
        memberTabs.list.forEach(el => el.classList.remove('active'));
        this.tab.classList.add('active');
        this.allCards.forEach(el => el.classList.remove('active'));
        this.cards.forEach(el => el.classList.add('active'));
    }
}

let memberTabs = document.querySelector('.team-members');
memberTabs = new Tabs(memberTabs);