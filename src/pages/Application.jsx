import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

function Application() {
    const [showContent, setShowContent] = useState(false);
  
    const toggleContent = () => {
      setShowContent(!showContent);
    };
    // 
    const [showContenta, setShowContenta] = useState(false);
  
    const toggleContenta = () => {
      setShowContenta(!showContenta);
    };
    // 
    const [showContentb, setShowContentb] = useState(false);
  
    const toggleContentb = () => {
      setShowContentb(!showContentb);
    };
    // 
    const [showContentc, setShowContentc] = useState(false);
  
    const toggleContentc = () => {
      setShowContentc(!showContentc);
    };
  return (
    <div>
      <Header />


      <div className="grid grid-cols-6">

      <div className=" h-full hidden md:block"><SideBar/></div>
      <div className="col-span-6 md:col-span-5 bg-blue-200">
        {/*  */}
      <div class="bg-blue-600 ">
        <div class="bg-gray-100 lg:flex lg:justify-center  lg:w-full">
          <div class="lg:w-[98%] p-5 bg-white rounded-lg shadow-2xl border-t-2 border-b-2 ">
            <div class="flex  items-center ">
            <div className='  font-semibold text-2xl'>Plan Diagnostics Form &nbsp;  </div>
              <h5 class="text-xl mt-1 ">
               ||&nbsp; Sample Check-in
              </h5>
              <div class="">

                {/* <img src="./public/gov.png" width="64" class=""  alt=""/> */}
              </div>
            </div>

            <hr className="mt-2"/>

            <form>
              <div class="flex flex-col mt-2 custom:flex-col lg:flex-row lg:justify-between lg:items-center">
                <div class="flex flex-col lg:flex-col ">
                  <span class="font-semibold text-[18px]">Lab<span class="text-red-500">*</span> :
                  </span>
                  <div class="mt-1 ">
                    <select id="subject" name="subject"
                      class="text-[14px]  md:w-60 text-green-500 w-full lg:w-96  px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                      <option value="general">Please Select</option>
                      <option value="Pathology">
                        National Plant Pathology Research Centre
                      </option>
                      <option value="Entomology">
                        National Entomology Research Centre
                      </option>
                      <option value="Lab">Central Lab</option>
                    </select>
                  </div>
                </div>

                <div class=" mt-2 ">
                  <span class="font-semibold text-[18px]">Submitter<span class="text-red-500">*</span> :</span>
                  <div class="mt-1">
                    <select id="subject" name="subject"
                      class="text-[14px] md:w-60 text-green-500  w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                      <option value="general">Please Select</option>
                      <option value="support">Ram Bahadur</option>
                      <option value="feedback">Hari Shah</option>
                    </select>
                  </div>
                </div>
                <div class=" mt-2">
                  <h2 class="font-semibold text-[18px]">
                    Date<span class="text-red-500">*</span> :
                  </h2>
                  <div class="mt-1 ">
                    <input type="date" id="date" name="date"
                      class="text-[14px] md:w-full text-green-500 w-full lg:w-96  px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                  </div>
                </div>
              </div>

<hr className="mt-2"/>
              <h3 class="text-xl font-semibold mt-3 mb-1">
                Diagnostics Required<span class="text-red-500">*</span>
              </h3>
              <hr class="" />
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-2">
                <div class="flex flex-col  lg:justify-between">
                  <span class="font-semibold text-[18px]">Diagnostic test:
                  </span>
                  <div class="mt-1">
                    <select id="subject" name="subject"
                      class="text-[14px] text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                      <option value="general">Please Select</option>
                      <option value="Pathology">
                        National Plant Pathology Research Centre
                      </option>
                      <option value="Entomology">
                        National Entomology Research Centre
                      </option>
                      <option value="Lab">Central Lab</option>
                    </select>
                  </div>
                </div>

                <div class="flex flex-col mt-2">
                  <span class="font-semibold text-[18px]">Suspected Problem:</span>
                  <div class="mt-1">
                    <select id="subject" name="subject"
                      class="text-[14px] text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                      <option value="general">Please Select</option>
                      <option value="support">Ram Bahadur</option>
                      <option value="feedback">Hari Shah</option>
                    </select>
                  </div>
                </div>

                <div class="flex flex-col mt-2">
                  <span class="font-semibold text-[18px]">Host: </span>
                  <div class="mt-1">
                    <select id="subject" name="subject"
                      class="text-[14px] text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                      <option value="general">Please Select</option>
                      <option value="Pathology">
                        National Plant Pathology Research Centre
                      </option>
                      <option value="Entomology">
                        National Entomology Research Centre
                      </option>
                      <option value="Lab">Central Lab</option>
                    </select>
                  </div>
                </div>
              </div>

<hr className="mt-2"/>
              <div class="mt-5">
                <div class="w-full bg-white rounded">
                  <button onClick={toggleContent} id="showButtonId" type="button"
                    class="bg-green-500 flex items-center hover:bg-green-700 transition-all duration-300 ease-in-out text-white px-4 py-2  text-xl rounded mr-2">
                     Physical Sample
                  </button>
                  {/* <button id="hideButtonId" type="button"
                    class="bg-green-700 text-white text-xl flex px-4 py-2 rounded custom-hidden-class">
                    Hide Physical Sample &nbsp;<img src="./public/up.png" width="20" class="mt-1" alt=""/>
                  </button> */}  
                  {showContent && (
                  <div id="hiddenContentId" class="mt-4 custom-hidden-class">
                    <div class="flex flex-col lg:flex-row lg:justify-between mt-4">
                      <div class="flex flex-col">
                        <span class="font-semibold text-[18px]">Field/Reference ID:</span>
                        <div class="pt-1">
                          <input type="text" id="text" name="text"
                            class="text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <span class="font-semibold text-[18px]">Sample source:</span>
                        <div class="pt-1">
                          <input type="text" id="text" name="text"
                            class="text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <span class="font-semibold text-[18px]">Sample Materials Submitted:
                        </span>
                        <div class="pt-1">
                          <select id="subject" name="subject"
                            class="text-[14px] text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                            <option value="general">Please Select</option>
                            <option value="Pathology">
                              National Plant Pathology Research Centre
                            </option>
                            <option value="Entomology">
                              National Entomology Research Centre
                            </option>
                            <option value="Lab">Central Lab</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-3">
                      <div class=" ">
                        <h2 class="font-semibold text-[18px]">
                          Sample Collected<span class="text-red-500">*</span>
                        </h2>
                        <div class="pt-1">
                          <input type="date" id="date" name="date"
                            class="text-[14px] text-green-500 w-full lg:w-72 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                        </div>
                      </div>
                      <div class="mt-2">
                        <h2 class="font-semibold text-[18px]">
                          Physical Sample Received<span class="text-red-500">*</span>
                        </h2>
                        <div class="pt-1">
                          <input type="date" id="date" name="date"
                            class="text-[18px] text-green-500 w-full lg:w-72 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                        </div>
                      </div>

                      <div>
                        <div class="">
                          <span class="font-semibold text-[15px]">Country<span class="text-red-500">*</span>
                            :</span>
                          <div class="pt-1">
                            <input type="text" id="text" name="text"
                              class="text-green-500 w-full lg:w-72 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                          </div>
                        </div>
                      </div>

                      <div class="">
                        <span class="font-semibold text-[15px]">Province/State :
                        </span>
                        <div class="pt-1">
                          <select id="subject" name="subject"
                            class="text-[14px] text-green-500 w-full lg:w-72 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                            <option value="general">Please Select</option>
                            <option value="Pathology">
                              National Plant Pathology Research Centre
                            </option>
                            <option value="Entomology">
                              National Entomology Research Centre
                            </option>
                            <option value="Lab">Central Lab</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-3 mb-0">
                      <div class="">
                        <span class="font-semibold text-[15px]">Zip code :</span>
                        <div class="pt-1">
                          <input type="text" id="text" name="text"
                            class="text-green-500 w-full lg:w-80 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                        </div>
                      </div>

                      <div class="">
                        <span class="font-semibold text-[15px]">Altitude :</span>
                        <div class="pt-1">
                          <input type="text" id="text" name="text"
                            class="text-green-500 w-full lg:w-80 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                        </div>
                      </div>
                      <div class="">
                        <span class="font-semibold text-[15px]">Latitude :</span>
                        <div class="pt-1">
                          <input type="text" id="text" name="text"
                            class="text-green-500 w-full lg:w-80 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                        </div>
                      </div>
                      <div class="">
                        <span class="font-semibold text-[15px]">Longitude :</span>
                        <div class="pt-1">
                          <input type="text" id="text" name="text"
                            class="text-green-500 w-full lg:w-80 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                        </div>
                      </div>
                    </div>

                    <div class="flex flex-col mt-2"></div>
                  </div>)}
                </div>
              </div>
              <hr class="mt-1 bg-gray-400 " />

              <div class="flex flex-row xl:items-center mt-0">
                <h3 class="text-xl font-semibold mt-4 mb-1 ">
                  Diagnostics & NPDN
                </h3>
                <h5 class="lg:ml-4 pt-3 text-[18px] font-semibold text-gray-500">
                  New Diagnosis/ ID Information || Diagnosis/ ID1
                </h5>
              </div>
              <hr class="mt-1" />

              <div class="lg:flex lg:items-center mt-4 lg:justify-between">
                <div class="lg:flex flex-col lg:flex-row lg:items-center">
                  <span class="font-semibold text-[18px]">Enter the diagnosis name :
                  </span>
                  <div class="ml-2">
                    <input type="text" id="text" name="text"
                      class="text-green-500 w-full lg:w-96 mt-2  py-1  border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                  </div>
                </div>
                <div class="flex flex-col mt-2 lg:flex-row lg:items-center lg:ml-7">
                  <span class="font-semibold text-[18px] lg:mr-2">Genus : </span>
                  <div class="pt-1 ml-2">
                    <select id="subject" name="subject"
                      class="text-[14px] text-green-500 w-full px-2 lg:w-96 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                      <option value="general">Please Select</option>
                      <option value="Pathology">
                        National Plant Pathology Research Centre
                      </option>
                      <option value="Entomology">
                        National Entomology Research Centre
                      </option>
                      <option value="Lab">Central Lab</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mt-2">
                <div class="mt-2 lg:flex-row">
                  <span class="font-semibold text-[18px]">Species : </span>
                  <div class="pt-1">
                    <select id="subject" name="subject"
                      class="text-[14px] text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                      <option value="general">Please Select</option>
                      <option value="Pathology">
                        National Plant Pathology Research Centre
                      </option>
                      <option value="Entomology">
                        National Entomology Research Centre
                      </option>
                      <option value="Lab">Central Lab</option>
                    </select>
                  </div>
                </div>
                <div class="mt-2">
                  <span class="font-semibold text-[18px]">Sub-species :
                  </span>
                  <div class="pt-1">
                    <select id="subject" name="subject"
                      class="text-[14px] text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                      <option value="general">Please Select</option>
                      <option value="Pathology">
                        National Plant Pathology Research Centre
                      </option>
                      <option value="Entomology">
                        National Entomology Research Centre
                      </option>
                      <option value="Lab">Central Lab</option>
                    </select>
                  </div>
                </div>
                <div class="mt-2">
                  <span class="font-semibold text-[18px]">Lab Methods :
                  </span>
                  <div class="pt-1">
                    <select id="subject" name="subject"
                      class="text-[14px] text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                      <option value="general">Please Select</option>
                      <option value="Pathology">
                        National Plant Pathology Research Centre
                      </option>
                      <option value="Entomology">
                        National Entomology Research Centre
                      </option>
                      <option value="Lab">Central Lab</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr className="mt-2"/>
{/*  */}
              <div className="mt-5 flex  ">
                <div>

                <div className="">
                      <button onClick={toggleContenta}id="showButtonId2" type="button" className="bg-green-500  inline-block text-white px-4 py-2 rounded mr-2 text-xl">Insects :</button>
                </div>
                {showContenta && (
                <div class="mt-3">
                        <div>
                          <span class="font-bold text-[15px]">Insects </span>
                        </div>
                        <div class="flex mt-3 flex-col  ">
                          <div class="">
                            <span class="font-semibold text-[15px] text-gray-500">Name of Insect :</span>
                            <br />
                            <input type="text" id="text" name="text"
                              class="mt-1 text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                          </div>
                          <div class="pt-2">
                            <span class="font-semibold text-[15px] text-gray-500">Causing Damage :</span>
                            <br />
                            <select id="subject" name="subject"
                              class="text-[14px] mt-2 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                              <option value="general">Yes</option>
                              <option value="support">No</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <div class="mt-2">
                            <label for="message" class="block font-semibold mb-1 text-gray-500">Notes :</label>
                            <textarea id="message" name="message" rows="3"
                              class="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700"></textarea>
                          </div>

                          <div>
                            <button
                              class="mt-2 text-xs bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-700">
                              ADD ANOTHER
                            </button>
                          </div>
                        </div>
                        <div>
                          <div class="flex justify-between mt-4 mb-2">
                            <label for="image" class="block font-semibold mb-1">Add photos</label>
                            <input type="file" id="image" name="image" class="hidden" />
                            <label for="image"
                              class="bg-green-500 text-white font-semibold text-sm px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700">Browse
                              Files
                            </label>
                          </div>
                          <hr class="mt-2" />
                        </div>
                      </div>)}
                </div>
                <div className=" ml-16">

                <div className="">
                      <button onClick={toggleContentb}id="showButtonId3" type="button" className="bg-green-500 inline-block text-white px-4 py-2 rounded mr-2 text-xl">Disease Symptoms :</button>
                </div>
                {showContentb && (
                <div class="mt-3 ">
                        <div>
                          <span class="font-bold text-[15px]">Disease </span>
                        </div>
                        <div class="flex mt-3 flex-col  ">
                          <div class="">
                            <span class="font-semibold text-[15px] text-gray-500">Name of Disease :</span>
                            <br />
                            <input type="text" id="text" name="text"
                              class="mt-1 text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                          </div>
                          <div class="pt-2">
                            <span class="font-semibold text-[15px] text-gray-500">Causing Damage :</span>
                            <br />
                            <select id="subject" name="subject"
                              class="text-[14px] mt-2 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                              <option value="general">Yes</option>
                              <option value="support">No</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <div class="mt-2">
                            <label for="message" class="block font-semibold mb-1 text-gray-500">Notes :</label>
                            <textarea id="message" name="message" rows="3"
                              class="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700"></textarea>
                          </div>

                          <div>
                            <button
                              class="mt-2 text-xs bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-700">
                              ADD ANOTHER
                            </button>
                          </div>
                        </div>
                        <div>
                          <div class="flex justify-between mt-4 mb-2">
                            <label for="image" class="block font-semibold mb-1">Add photos</label>
                            <input type="file" id="image" name="image" class="hidden" />
                            <label for="image"
                              class="bg-green-500 text-white font-semibold text-sm px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700">Browse
                              Files
                            </label>
                          </div>
                          <hr class="mt-2" />
                        </div>
                      </div>)}
                </div>
                <div className="ml-16 ">

                <div className="">
                      <button onClick={toggleContentc}id="showButtonId4" type="button" className="bg-green-500 inline-block  text-white px-4 py-2 rounded mr-2 text-xl">Weeds :</button>
                </div>
                {showContentc && (
                <div class="mt-3 ">
                        <div>
                          <span class="font-bold text-[15px]">Weeds </span>
                        </div>
                        <div class="flex mt-3 flex-col  ">
                          <div class="">
                            <span class="font-semibold text-[15px] text-gray-500">Name of Weeds :</span>
                            <br />
                            <input type="text" id="text" name="text"
                              class="mt-1 text-green-500 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                          </div>
                          <div class="pt-2">
                            <span class="font-semibold text-[15px] text-gray-500">Causing Damage :</span>
                            <br />
                            <select id="subject" name="subject"
                              class="text-[14px] mt-2 w-full lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700">
                              <option value="general">Yes</option>
                              <option value="support">No</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <div class="mt-2">
                            <label for="message" class="block font-semibold mb-1 text-gray-500">Notes :</label>
                            <textarea id="message" name="message" rows="3"
                              class="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700"></textarea>
                          </div>

                          <div>
                            <button
                              class="mt-2 text-xs bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-700">
                              ADD ANOTHER
                            </button>
                          </div>
                        </div>
                        <div>
                          <div class="flex justify-between mt-4 mb-2">
                            <label for="image" class="block font-semibold mb-1">Add photos</label>
                            <input type="file" id="image" name="image" class="hidden" />
                            <label for="image"
                              class="bg-green-500 text-white font-semibold text-sm px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700">Browse
                              Files
                            </label>
                          </div>
                          <hr class="mt" />
                        </div>
                      </div>)}
                </div>
                
                

              </div>

              {/*  */}
             

              {/* <hr class="mt-3 bg-gray-400 " /> */}
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-3">
                <div class="flex flex-col lg:flex-row mt-5 lg:items-center ">
                  <span class="font-semibold text-[18px]">Plant Population :</span>
                  <input type="text" id="text" name="text"
                    class="text-green-500 ml-2 pt-1 lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                </div>
                <div class="flex flex-col lg:flex-row mt-3 lg:items-center">
                  <span class="font-semibold text-[18px]">Number of Good Plants :
                  </span>
                  <input type="text" id="text" name="text"
                    class="text-green-500 w-full ml-2 lg:w-96 px-2 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700" />
                </div>
              </div>
              <div class="mt-3 flex flex-col">
                <label for="message" class="block font-semibold mb-1 text-[18px]">Remarks :</label>
                <div class="mr-40">
                  <textarea id="message" name="message" rows="3"
                    class="w-full  px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-green-700"></textarea>
                  <div class="w-full flex justify-between">
                    <span class="text-xs">Powered by <strong>db.collection.fintone</strong></span>
                    <button class="bg-green-500 text-xs text-white px-4 py-1 rounded-lg hover:bg-green-700">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
              <hr class="mt-4 bg-gray-400 h-1" />

              <div class="flex justify-end mt-3">
                <button
                  class="mt-2 bg-green-500 text-white text-xl font-semibold px-2 py-1 rounded-lg hover:bg-green-700">
                  Save
                </button>&nbsp;&nbsp;&nbsp;
                <button
                  class="mt-2 bg-green-500 text-white text-xl font-semibold px-2 py-1 rounded-lg hover:bg-green-700">
                  Finish
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>


      </div>




    // </div>
  );
}

export default Application;
