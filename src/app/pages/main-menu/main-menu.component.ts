import { Component, OnInit } from '@angular/core';
import { faGears } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  icons = {
    faGears : faGears,
  }

  wave = {
    currentWave : 0,
    waveState : 'standing',
    wavePath : [
      "M0,160L18.5,138.7C36.9,117,74,75,111,64C147.7,53,185,75,222,112C258.5,149,295,203,332,202.7C369.2,203,406,149,443,149.3C480,149,517,203,554,224C590.8,245,628,235,665,192C701.5,149,738,75,775,80C812.3,85,849,171,886,176C923.1,181,960,107,997,85.3C1033.8,64,1071,96,1108,117.3C1144.6,139,1182,149,1218,154.7C1255.4,160,1292,160,1329,154.7C1366.2,149,1403,139,1422,133.3L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z",
      "M0,128L18.5,138.7C36.9,149,74,171,111,165.3C147.7,160,185,128,222,133.3C258.5,139,295,181,332,170.7C369.2,160,406,96,443,90.7C480,85,517,139,554,170.7C590.8,203,628,213,665,229.3C701.5,245,738,267,775,229.3C812.3,192,849,96,886,69.3C923.1,43,960,85,997,117.3C1033.8,149,1071,171,1108,165.3C1144.6,160,1182,128,1218,144C1255.4,160,1292,224,1329,250.7C1366.2,277,1403,267,1422,261.3L1440,256L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z",
      "M0,96L18.5,122.7C36.9,149,74,203,111,218.7C147.7,235,185,213,222,213.3C258.5,213,295,235,332,245.3C369.2,256,406,256,443,229.3C480,203,517,149,554,149.3C590.8,149,628,203,665,229.3C701.5,256,738,256,775,213.3C812.3,171,849,85,886,64C923.1,43,960,85,997,122.7C1033.8,160,1071,192,1108,181.3C1144.6,171,1182,117,1218,101.3C1255.4,85,1292,107,1329,117.3C1366.2,128,1403,128,1422,128L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z",
    ],
    runWave : () => {
      this.wave.waveState = 'running';
      setInterval( () => {
        if(this.wave.currentWave + 1 >= this.wave.wavePath.length) {
          this.wave.currentWave = 0;
        } else {
          this.wave.currentWave += 1;
        }
      }, 1000)
    },
  }

  constructor() { }

  ngOnInit(): void {
    this.wave.runWave()
  }

  waveFoward(): void {
    
  }

}