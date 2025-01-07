import {Component, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common'
import {MatCardModule} from '@angular/material/card';
import * as javaVersionsJson from '../../assets/java-versions.json';


@Component({
  selector: 'app-java-version',
  imports: [CommonModule, MatCardModule],
  templateUrl: './java-version.component.html',
  styleUrl: './java-version.component.css',
  encapsulation: ViewEncapsulation.None,// required for styling innerHTML
})
export class JavaVersionComponent {
  javaVersions: any = (javaVersionsJson as any).default;

  toHtml(code: string) {
    return code
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replace(/(?:\r\n|\r|\n)/g, '<br>')
      .replace(" public ", "&nbsp;<span class='reserved'>public</span>&nbsp;")
      .replace(" new ", "&nbsp;<span class='reserved'>new</span>&nbsp;")
      .replace(" for ", "&nbsp;<span class='reserved'>for</span>&nbsp;")
      .replace(" if ", "&nbsp;<span class='reserved'>if</span>&nbsp;")
      .replace(" int ", "&nbsp;<span class='reserved'>int</span>&nbsp;")
      .replace(" return ", "&nbsp;<span class='reserved'>return</span>&nbsp;");
  }
}
