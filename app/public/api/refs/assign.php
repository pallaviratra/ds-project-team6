<!-- 
         <h3>{{ selectedRef === null ? "Add " : "Edit " }} Referee</h3>

            <form v-on:submit.prevent="postRef">
              <div class="mb-3">
                <label for="ref_id" class="form-label">ID</label>
                <input type="text" v-model="refForm.ref_id"
                 class="form-control" id="ref_id">
              </div>

              <div class="mb-3">
                <label for="fname" class="form-label">First Name</label>
                <input type="text" v-model="refForm.first_name" class="form-control" id="first_name">
              </div>

              <div class="mb-3">
                <label for="lname" class="form-label">Last Name</label>
                <input type="number" v-model="refForm.last_name" class="form-control" id="last_name">
              </div>

              <div class="mb-3">
                <label for="age" class="form-label">Age</label>
                <input type="number" v-model="refForm.age" class="form-control" id="age">
              </div>

               <div class="mb-3">
                <label for="grade" class="form-label">Referee Grade</label>
                <input type="number" v-model="refForm.referee_grade" class="form-control" id="age">
              </div>

               <div class="mb-3">
                <label for="skill" class="form-label">Referee Skill</label>
                <input type="number" v-model="refForm.referee_skill" class="form-control" id="skill">
              </div>

               <div class="mb-3">
                <label for="details" class="form-label">Referee Details</label>
                <input type="number" v-model="refForm.referee_skill" class="form-control" id="details">
              </div>


               <button type="submit" class="btn btn-primary">{{ selectedRef === null ? "Add " : "Edit " }} Referee</button>
              <button type="button" class="btn btn-outline-secondary" v-if="selectedRef" v-on:click="resetRefForm">Cancel</button>
            </form> -->