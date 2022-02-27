let prinfo = {
    props: ['nom', 'prenom', 'birthday', 'adresse', "car"],
    template: `
    <div>
    <h1>{{nom}} {{prenom}}</h1>
    <h4 v-if="birthday !== null">Age: {{age}}ans</h4>
    <h4>Adresse: {{adresse}}</h4>
    <h4 :style="{color:carColor}">Voiture: {{hasCar}} </h4>
    </div>
`,
    computed: {
        age: function () {
            let today = new Date()
            let birthday = new Date(this.birthday)
            let diff = today.getTime() - birthday.getTime();
            return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        },
        hasCar: function () {
            return (this.car === true) ? "oui" : "non";
        },
        carColor: function () {
            return (this.car === true) ? "green" : "red";
        }
    }
}


let formation = {
    props: ['schools'],
    template: `
    <div>
        <h4>Formation :</h4>
        <ul>
            <li v-for="school of schools"> {{school.name}} Du {{school.start}} Au {{school.end}} </li>
        </ul>
    </div>`,
}

let pro = {
    props: ['experiences'],
    template: `
    <div>
      <h4>Experiences :</h4>
      <ul>
         <li v-for="experience of experiences"> {{experience.nameEx}} Du {{experience.startEx}} Au {{experience.endEx}} </li>
      </ul>

    </div>`,
}

let competences = {
    props: ['comps'],
    template: `
    <div>
        <h4>competences :</h4>
        <ul>
            <li v-for="comp of comps"> {{comp.nameCo}} </li>
        </ul>

    </div>`,
}



let app = new Vue({
    el: '#app',
    components: {
        'prinfo': prinfo,
        'formation': formation,
        'pro': pro,
        'competences': competences,
    },
    data: {
        nom: null,
        prenom: null,
        birthday: null,
        adresse: null,
        car: null,
        schools: [],
        experiences: [],
        comps: []
    },
    methods: {
        addSchool: function () {

            let name = document.getElementById('school').value
            let start = document.getElementById('schoolStart').value
            let end = document.getElementById('schoolEnd').value

            this.schools.push({ name, start, end })

            document.getElementById('school').value = ''
            document.getElementById('schoolStart').value = ''
            document.getElementById('schoolEnd').value = ''


        },
        addEx: function () {

            let nameEx = document.getElementById('experience').value
            let startEx = document.getElementById('exStart').value
            let endEx = document.getElementById('endEx').value

            this.experiences.push({ nameEx, startEx, endEx })

            document.getElementById('experience').value = ''
            document.getElementById('exStart').value = ''
            document.getElementById('endEx').value = ''

        },
        addCo: function () {

            let nameCo = document.getElementById('comp').value
            this.comps.push({ nameCo })

            document.getElementById('comp').value = ''

        },
        addStorage: function () {
            localStorage.setItem('cv', JSON.stringify(this.$data));
            console.log(localStorage)
            let retrievedObject = localStorage.getItem('dataObject');        

        }
    },
})

