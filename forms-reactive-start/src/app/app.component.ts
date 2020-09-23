import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Tony', 'Anna', 'Tom'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe(
    //   (value => console.log(value))
    // );
    this.signupForm.statusChanges.subscribe(
      (status => console.log(status))
    );

    this.signupForm.setValue({
      'userData': {
        'username': 'Andrew',
        'email': 'stansdg@dfgdfg.dfgd'
      },
      'gender': 'female',
      'hobbies': []
    });
    // this.signupForm.patchValue({
    //   'userData': {
    //     'username': 'qwqetty'
    //   }
    // });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset('gender');
  }

  onAddHobby() {
    const control = new FormControl(null);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenName(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      console.log(this.forbiddenUsernames.indexOf(control.value));
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'stanish2000@gmail.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
