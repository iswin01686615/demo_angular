import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrl: './tab-view.component.css',
})
export class TabViewComponent {
  allOpened: boolean = false;
  activeTabIndex: number = 0;
  idTab: number = 0;
  listActive: number[] = [];
  listData: any[] = [
    {
      idTab: 1,
      title: 'Youtube',
      content: [
        {
          idColab: 1,
          title: 'Colab Yt 1',
          content:
            'This is content for Colab Yt 1. It includes detailed information about the collaboration and related tasks.',
          disable: false,
        },
        {
          idColab: 2,
          title: 'Colab Yt 2',
          content:
            'This is content for Colab Yt 2. It includes detailed information about the collaboration and related tasks.',
          disable: true,
        },
        {
          idColab: 3,
          title: 'Colab Yt 3',
          content:
            'This is content for Colab Yt 3. It includes detailed information about the collaboration and related tasks.',
          disable: true,
        },
      ],
    },
    {
      idTab: 2,
      title: 'Facebook',
      content: [
        {
          idColab: 4,
          title: 'Colab Fb 1',
          content:
            'This is content for Colab Fb 1. It includes detailed information about the collaboration and related tasks.',
          disable: true,
        },
        {
          idColab: 5,
          title: 'Colab Fb 2',
          content:
            'This is content for Colab Fb 2. It includes detailed information about the collaboration and related tasks.',
          disable: false,
        },
        {
          idColab: 6,
          title: 'Colab Fb 3',
          content:
            'This is content for Colab Fb 3. It includes detailed information about the collaboration and related tasks.',
          disable: true,
        },
      ],
    },
    {
      idTab: 3,
      title: 'Tiktok',
      content: [
        {
          idColab: 7,
          title: 'Colab Tt 1',
          content:
            'This is content for Colab Tt 1. It includes detailed information about the collaboration and related tasks.',
          disable: true,
        },
        {
          idColab: 8,
          title: 'Colab Tt 2',
          content:
            'This is content for Colab Tt 2. It includes detailed information about the collaboration and related tasks.',
          disable: true,
        },
        {
          idColab: 9,
          title: 'Colab Tt 3',
          content:
            'This is content for Colab Tt 3. It includes detailed information about the collaboration and related tasks.',
          disable: false,
        },
      ],
    },
  ];

  ngOnInit(): void {
    const activeTab = this.listData[this.activeTabIndex];
    this.idTab = activeTab.idTab;
    console.log('Active Tab ID init:', this.idTab);
  }
  getDisabledIndices(content: any[]): number[] {
    return content
      .map((colab, index) => (colab.disable === true ? index : -1))
      .filter((index) => index !== -1);
  }
  handleLog(data: any) {
    const selectedIndex = data.index;
    const selectedTab = this.listData[selectedIndex];
    this.idTab = selectedTab.idTab;
    console.log('Selected Tab ID:', this.idTab);
  }
  openAll(idTab: number) {
    const tab = this.listData.find((t) => t.idTab === idTab);
    if (tab) {
      tab.content.forEach((colab: any) => (colab.disable = true));
      console.log(`Opened all colabs for tab ID: ${idTab}`);
      this.allOpened = true;
    }
  }

  closeAll(idTab: number) {
    const tab = this.listData.find((t) => t.idTab === idTab);
    if (tab) {
      tab.content.forEach((colab: any) => (colab.disable = false));
      console.log(`Close all colabs for tab ID: ${idTab}`);
      this.allOpened = false;
    }
  }
}
