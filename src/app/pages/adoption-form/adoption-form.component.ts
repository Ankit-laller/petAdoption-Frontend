import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-adoption-form',
  templateUrl: './adoption-form.component.html',
  styleUrls: ['./adoption-form.component.css']
})
export class AdoptionFormComponent implements OnInit {

   statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
];
adoptionForm: FormGroup;
additionalInputs: any[] = [];
inputFiles: { [key: string]: File } = {}; 

  constructor(private fb: FormBuilder, private petService:PetService) { }

  ngOnInit() {
    this.adoptionForm = this.fb.group({
      petName: ['', Validators.required],
      petAge: ['', Validators.required],
      gender: ['', Validators.required],
      petType: ['', Validators.required],
      vaccinated: [Boolean, Validators.required],
      price: ['', Validators.required],
      address: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      description:["",Validators.required],
      images: [[]]
    });
  }
  
  onFileSelected(event: any, key: string) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      const imagesControl = this.adoptionForm.get('images');
      imagesControl.value[key] = files[0];
      imagesControl.markAsDirty(); 
    }
  }

  addInput() {
    if (this.additionalInputs.length < 2) { 
      this.additionalInputs.push(this.additionalInputs.length + 1);
      // const imagesControl:any = this.adoptionForm.get('images') ;
      // imagesControl.push(null);
    }
  }

  onSubmit() {
    // debugger
    if (this.adoptionForm.valid) {
      const formData = new FormData();
      formData.append('petName', this.adoptionForm.get('petName').value);
      formData.append('petAge', this.adoptionForm.get('petAge').value);
      formData.append('PetGender', this.adoptionForm.get('gender').value);
      formData.append('petType', this.adoptionForm.get('petType').value);
      formData.append('vaccinated', this.adoptionForm.get('vaccinated').value);
      formData.append('price', this.adoptionForm.get('price').value);
      const address = this.adoptionForm.get('address').value+","+
      this.adoptionForm.get('address2').value+","+this.adoptionForm.get('city').value+","+
      this.adoptionForm.get('state').value+","+this.adoptionForm.get('zip').value;
      formData.append("address",address)
      formData.append("description",this.adoptionForm.get("description").value);
      formData.append("userId",localStorage.getItem("currentUser"))

      const imagesControl:any = this.adoptionForm.get('images').value;
        imagesControl.forEach((image: File, index: number) => {
          if (image) {
            formData.append('image', image, `image${index + 1}`);
          }
        });
      
      imagesControl.forEach((image: File, index: number) => {
        if (image) {
          formData.append('images', image, `image${index + 1}`);
        }
      });
        console.log(this.adoptionForm.value)
        console.log(this.adoptionForm.get("images"))
        console.log(formData.get("images"))
        console.log(formData.get("petName"))

      
      this.petService.uploadPetData(formData).subscribe(
        r=>{
          console.log('Form submitted successfully:', r);
          this.adoptionForm.reset();
        }
        
      )
    } else {
      console.log('Form is invalid. Please check all fields.');
    }
  }

}
