import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PREADMISSION } from '../constanst/routue.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.loadScript();
  }

  public onGoToPreAdmission(): void {
    this.router.navigate([`/${ROUTE_PREADMISSION}`]);
  }

  private loadScript(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://app.tuotempo.com/mop/mop-launcher/dist/tt-mop-launcher.php';
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('tt-mop-launcher-plugin', '');
    script.setAttribute('tt-instance', 'tt_hmarinam_prod');

    /* script.onload = () => {
      const interval = setInterval(() => {
        const launcherButton = document.querySelector('#tt-mop-launcher .launcher-open-icon') as HTMLElement;
        if (launcherButton) {
          launcherButton.click();
          clearInterval(interval);
        }
      }, 1000);
    }; */

    this.renderer.appendChild(document.body, script);
  }
}
