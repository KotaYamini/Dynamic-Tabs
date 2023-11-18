import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabsComponent) tabs!: QueryList<TabsComponent>;
  
  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first); // Select the first tab if none is active
    }
  }

  selectTab(selectedTab: TabsComponent): void {
    this.tabs.toArray().forEach(tab => tab.active = false);
    selectedTab.active = true;
  }
}
