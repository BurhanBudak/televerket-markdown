<script setup>
router
import router from '@/router';
import { reactive } from 'vue';
// import { useToast } from 'vue-toastification';

const form = reactive({
  date: '',
  occurrence: '',
  dst: '',
  simswap:'',
  connection: '',
  status: {
    power: false,
    ip: false,
    wifi: false,
  },
  poe:'',
  reboot: '',
  installation: '',
  coordinates: '',
  radio: {
    gsm: '',
    umts: '',
    lte: '',
    nr: '',
  },
  feedback: '',
  other: '',
  description: ''
})

// const toast = useToast();

// const handleSubmit = async () => {
//   const newJob = {
//     title: form.title,
//     type: form.location,
//     description: form.description,
//     salary: form.salary,
//     location: form.location,
//     company: {
//       name: form.company.name,
//       description: form.company.description,
//       contactEmail: form.company.contactEmail,
//       contactPhone: form.company.contactPhone
//     }
//   }
//   try {
//     const response = await axios.post('/api/jobs/', newJob);
//     toast.success('Job Added Successfully')
//     router.push(`/jobs/${response.data.id}`)
//   } catch (error) {
//     toast.error('Job Was Not Added')
//     console.log('Error pushing job' + error);
//   }
  
// }

</script>
<template>
    <section class="bg-orange-50">
      <div class="container m-auto max-w-2xl py-24">
        <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form @submit.prevent="handleSubmit">
            <h2 class="text-3xl text-center font-semibold mb-6">Felsökning FWA</h2>

            <div class="mb-4">
              <label for="date" class="block text-gray-700 font-bold mb-2">Problem sedan den:</label>
              <input
              v-model="form.date"
                type="date"
                id="date"
                name="fault-start-date"
                value=""
                class="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div class="mb-4">
                <p class="block text-gray-700 font-bold mb-2">Återkommande problem?</p>
                <div class="flex items-center space-x-4">
                  <!-- Option 1 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.occurrence"
                      name="options"
                      value="option1"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Ja</span>
                  </label>
                  
                  <!-- Option 2 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.occurrence"
                      name="options"
                      value="option2"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Nej</span>
                  </label>
                </div>
            </div >
            <div class="mb-4">
                <p class="block text-gray-700 font-bold mb-2">Serviceutbyte av hårdvara?</p>
                <div class="flex items-center space-x-4">
                  <!-- Option 1 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.dst"
                      name="options"
                      value="option1"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Ja</span>
                  </label>
                  
                  <!-- Option 2 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.dst"
                      name="options"
                      value="option2"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Nej</span>
                  </label>
                </div>
            </div>
            <div class="mb-4">
                <p class="block text-gray-700 font-bold mb-2">Tidigare SIM-korts byten?</p>
                <div class="flex items-center space-x-4">
                  <!-- Option 1 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.simswap"
                      name="options"
                      value="option1"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Ja</span>
                  </label>
                  
                  <!-- Option 2 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.simswap"
                      name="options"
                      value="option2"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Nej</span>
                  </label>
                </div>
            </div>

            <div class="mb-4">
                <p class="block text-gray-700 font-bold mb-2">Anslutning till hårdvara (Wi-Fi/LAN):</p>
                <div class="flex items-center space-x-4">
                  <!-- Option 1 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.connection"
                      name="options"
                      value="option1"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Wi-Fi</span>
                  </label>
                  
                  <!-- Option 2 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.connection"
                      name="options"
                      value="option2"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">LAN</span>
                  </label>
                </div>
            </div>
            <div class="mb-4">
              <div class="flex flex-col items-start">
                <p class="block text-gray-700 font-bold mb-2">Status på routerns lampor (en F1):</p>
                <div class="flex flex-col space-y-2">
                  <!-- Power -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      v-model="form.status.power"
                      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Power</span>
                  </label>

                  <!-- @ -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      v-model="form.status.ip"
                      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span class="text-gray-700">@</span>
                  </label>

                  <!-- WiFi -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      v-model="form.status.wifi"
                      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span class="text-gray-700">WiFi</span>
                  </label>
                </div>
              </div>
          </div>
          <div class="mb-4">
                <p class="block text-gray-700 font-bold mb-2">PoE-adapte lampan indikerar:</p>
                <div class="flex items-center space-x-4">
                  <!-- Option 1 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.poe"
                      name="options"
                      value="option1"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Fast 🟢</span>
                  </label>
                  
                  <!-- Option 2 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.poe"
                      name="options"
                      value="option2"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Fast 🟡</span>
                  </label>
                  <!-- Option 3 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.poe"
                      name="options"
                      value="option3"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Blinkande 🟢</span>
                  </label>
                </div>
            </div>
            <div class="mb-4">
                <p class="block text-gray-700 font-bold mb-2">PoE adapter fabriksåterställning:</p>
                <div class="flex items-center space-x-4">
                  <!-- Option 1 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.reboot"
                      name="options"
                      value="option1"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Ja</span>
                  </label>
                  
                  <!-- Option 2 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.reboot"
                      name="options"
                      value="option2"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Nej</span>
                  </label>
                </div>
            </div>
            <div class="mb-4">
                <p class="block text-gray-700 font-bold mb-2">Antennens montering:</p>
                <div class="flex items-center space-x-4">
                  <!-- Option 1 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.install"
                      name="options"
                      value="option1"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Inomhus</span>
                  </label>
                  
                  <!-- Option 2 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.installation"
                      name="options"
                      value="option2"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Utomhus</span>
                  </label>
                </div>
            </div>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Antenn riktning(väderstreck):</label>
              <select
              v-model="form.coordinates"
                id="type"
                name="type"
                class="border rounded w-full py-2 px-3"
                required
              >
                <option value="Norr">Norr</option>
                <option value="Öst">Öst</option>
                <option value="Väst">Väst</option>
                <option value="Söder">Söder</option>
              </select>
            </div>

            <div class="mb-4">
              <div class="flex flex-col items-start">
                <p class="block text-gray-700 font-bold mb-2">MBOSS driftstörning status finns för:</p>
                <div class="flex flex-col space-y-2">
                  <!-- 2G -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      v-model="form.radio.gsm"
                      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span class="text-gray-700">2G</span>
                  </label>

                  <!--3G-->
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      v-model="form.radio.umts"
                      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span class="text-gray-700">3G</span>
                  </label>

                  <!-- 4G -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      v-model="form.radio.lte"
                      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span class="text-gray-700">4G</span>
                  </label>

                  <!-- 5G -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      v-model="form.radio.nr"
                      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span class="text-gray-700">5G</span>
                  </label>
                </div>
              </div>
          </div>

            <div class="mb-4">
              <p class="block text-gray-700 font-bold mb-2">Har man lagt en synpunkt:</p>
                <div class="flex items-center space-x-4">
                  <!-- Option 1 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.feedback"
                      name="options"
                      value="Ja"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Ja</span>
                  </label>
                  
                  <!-- Option 2 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.feedback"
                      name="options"
                      value="Nej"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Nej</span>
                  </label>
                </div>
            </div>

            <div class="mb-4">
              <p class="block text-gray-700 font-bold mb-2">Kund får/får ingen uppkoppling med mobildata med en annan enhet (4g/5g- mobiltelefon/router) med mobiltjänst i Telias nät (t.ex. Telia, Halebop, Fello)</p>
                <div class="flex items-center space-x-4">
                  <!-- Option 1 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.other"
                      name="options"
                      value="Ja"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Får</span>
                  </label>
                  
                  <!-- Option 2 -->
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      v-model="form.other"
                      name="options"
                      value="Nej"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span class="text-gray-700">Får inte</span>
                  </label>
                </div>
            </div>

            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-bold mb-2"
                >Kommentar</label
              >
              <textarea
                id="description"
                v-model="form.description"
                name="description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
              ></textarea>
            </div>

            

            <!-- <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                v-model="form.location"
                name="location"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
              />
            </div> -->

            <!-- <h3 class="text-2xl mb-5">Company Info</h3>

            <div class="mb-4">
              <label for="company" class="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                type="text"
                id="company"
                v-model="form.company.name"
                name="company"
                class="border rounded w-full py-2 px-3"
                placeholder="Company Name"
              />
            </div>

            <div class="mb-4">
              <label
                for="company_description"
                class="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                id="company_description"
                v-model="form.company.description"
                name="company_description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
              ></textarea>
            </div> -->

            <div>
              <button
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Copy
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
</template>