
<template>
<form action="https://docs.google.com/forms/d/e/1FAIpQLSdllFdvlWSCix9vLvuxVR8k66saauM6LhDDw1xIpIQ1P6nb0g/formResponse"
      target="_self"
      id="bootstrapForm"
      method="POST">
    <fieldset>
       <legend for="">Email</legend>
        <div class="form-group">
            <input id="emailAddress" type="email" name="emailAddress" class="form-control" required>
        </div>
    </fieldset>


    <!-- Field type: "short" id: "1936618520" -->
    <fieldset>
        <legend for="1936618520">Name</legend>
        <div class="form-group">
            <input id="763692827" type="text" name="entry.763692827" class="form-control" required>
        </div>
    </fieldset>


    <!-- Field type: "short" id: "1797454331" -->
    <fieldset>
    <legend for="1797454331">Phone</legend>
    <div class="form-group">
        <input id="1415610136" type="tel" name="entry.1415610136" class="form-control" pattern="\d{3}-\d{3}-\d{4}" required placeholder="123-456-7890" @input="handleInput" maxlength="12">
    </div>
</fieldset>


    <!-- Field type: "date" id: "1738901855" -->
    <fieldset>
        <legend for="1738901855">Moving Date</legend>
        <div class="form-group">
            <input type="date" id="839232848_date" placeholder="2024-03-10" class="form-control" >
        </div>
    </fieldset>


    <!-- Field type: "time" id: "1724140824" -->
    <fieldset>
        <legend for="1724140824">Time of Day</legend>
        <div class="form-group">
            <input type="time" id="2146346979" placeholder="6:36:12 p.m." class="form-control" >
        </div>
    </fieldset>


    <!-- Field type: "short" id: "1755621719" -->
    <fieldset>
        <legend for="1755621719">Pick up Address</legend>
        <div class="form-group">
            <input id="1151850810" type="text" name="entry.1151850810" class="form-control" required>
        </div>
    </fieldset>


    <!-- Field type: "choices" id: "1715807362" -->
    <fieldset>
        <legend for="1715807362">Select From:</legend>
        <div class="form-group">
            <div class="radio">
                <label>
                    <input type="radio" name="entry.1908652581" value="Two Story House" required>
                    Two Story House
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="entry.1908652581" value="Appartment" required>
                    Appartment
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="entry.1908652581" value="Attached/triplex" required>
                    Attached/triplex
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="entry.1908652581" value="Bungalow" required>
                    Bungalow
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="entry.1908652581" value="Storage" required>
                    Storage
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="entry.1908652581" value="Office" required>
                    Office
                </label>
            </div>
        </div>
    </fieldset>


    <!-- Field type: "short" id: "310983331" -->
    <fieldset>
        <legend for="310983331">Drop off Address</legend>
        <div class="form-group">
            <input id="1466811179" type="text" name="entry.1466811179" class="form-control" required>
        </div>
    </fieldset>


    <!-- Field type: "choices" id: "445724474" -->
    <fieldset>
        <legend for="445724474">Select To:</legend>
        <div class="form-group">
            <div class="radio">
                <label>
                    <input type="radio" name="entry.230868506" value="Two Story House" required>
                    Two Story House
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="entry.230868506" value="Appartment" required>
                    Appartment
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="entry.230868506" value="Bungalow" required>
                    Bungalow
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="entry.230868506" value="Attached/Triplex" required>
                    Attached/Triplex
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="entry.230868506" value="Storage" required>
                    Storage
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="entry.230868506" value="Office" required>
                    Office
                </label>
            </div>
        </div>
    </fieldset>


    <!-- Field type: "paragraph" id: "443737303" -->
    <fieldset>
        <legend for="443737303">List of furniture/boxes and bags</legend>
        <div class="form-group">
            <textarea id="1891235701" name="entry.1891235701" class="form-control" required></textarea>
        </div>
    </fieldset>


    <!-- Field type: "choices" id: "1836914548" -->
    <fieldset>
        <legend for="1836914548">Disassembly/Assembly Required</legend>
        <div class="form-group">
            <div class="radio">
                <label>
                    <input type="radio" name="entry.1768033844" value="Yes" required>
                    Yes
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="entry.1768033844" value="No" required>
                    No
                </label>
            </div>
        </div>
    </fieldset>

    <input type="hidden" name="fvv" value="1">
    <input type="hidden" name="fbzx" value="-5980955521237386693">
    <!--
        CAVEAT: In multipages (multisection) forms, *pageHistory* field tells to google what sections we've currently completed.
        This usually starts as "0" for the first page, then "0,1" in the second page... up to "0,1,2..N" in n-th page.
        Keep this in mind if you plan to change this code to recreate any sort of multipage-feature in your exported form.
        We're setting this to the total number of pages in this form because we're sending all fields from all the section together.
    -->
    <input type="hidden" name="pageHistory" value="0">

    <input class="btn btn-primary" type="submit" value="Submit">
</form>
</template>

<script>

export default {

        mounted() {
        let script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
        script.onload = () => {
            let scriptForm = document.createElement('script');
            scriptForm.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.3.0/jquery.form.min.js";
            scriptForm.onload = () => {
                this.initJQuery();
            };
            document.body.appendChild(scriptForm);
        };
        document.body.appendChild(script);
    },
    methods: {
        initJQuery() {
              $('#bootstrapForm').submit(function (event) {
                event.preventDefault();
                var extraData = {};
                {
                    /* Parsing input date id=839232848 */
                    var dateField = $("#839232848_date").val();
                    var timeField = $("#839232848_time").val();
                    let d = new Date(dateField);
                    if (!isNaN(d.getTime())) {
                        extraData["entry.839232848_year"] = d.getFullYear();
                        extraData["entry.839232848_month"] = d.getMonth() + 1;
                        extraData["entry.839232848_day"] = d.getUTCDate();
                    }
                    if (timeField && timeField.split(':').length >= 2) {
                        let values = timeField.split(':');
                        extraData["entry.839232848_hour"] = values[0];
                        extraData["entry.839232848_minute"] = values[1];
                    }
                }
                {
                    // Parsing input time id=2146346979
                    var field = $("#2146346979").val();
                    if (field) {
                        var values = field.split(':');
                        extraData["entry.2146346979_hour"] = values[0];
                        extraData["entry.2146346979_minute"] = values[1];
                        extraData["entry.2146346979_second"] = values[2];
                    } 
                }
                $('#bootstrapForm').ajaxSubmit({
                    data: extraData,
                    dataType: 'jsonp',  
                    error: function () {
                        alert('Form Submitted. Thanks.');
                    }
                });
            });
            
        }
    },
    methods: {
        checkInput(event) {
        const regexPattern = /^\d{3}-\d{3}-\d{4}$/;
    // Do something when the input matches the pattern
         if (regexPattern.test(event.target.value)) {
        // Input matches the pattern, do nothing or perform some other action
        }
    },
        formatPhoneNumber(event) {
        let input = event.target.value.replace(/\D/g,''); // Remove all non-digits
        if (input.length > 3 && input.length <= 6)
            input = input.replace(/(\d{3})(\d{1,3})/, "$1-$2");
        else if (input.length > 6)
            input = input.replace(/(\d{3})(\d{3})(\d{1,4})/, "$1-$2-$3");
        event.target.value = input;
    },

        handleInput(event) {
            this.formatPhoneNumber(event);
            this.checkInput(event);
        }
    },
}



</script>

<style scoped>
/* Styles for the form */
#bootstrapForm {
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}

/* Styles for the fieldsets */
fieldset {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 20px;
}

/* Styles for the legends */
legend {
    font-size: 1.2em;
    margin-bottom: 10px;
}

/* Styles for the form groups */
.form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
}

/* Styles for the form controls */
.form-control {
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    resize: none;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}

/* Styles for the radio buttons */
.radio {
    margin-bottom: 10px;
}

/* Styles for the radio labels */
.radio label {
    font-size: 1em;
    margin-left: 5px;
}

/* Styles for the submit button */
.btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #0056b3;
}

/* Responsive styles for tablets */
@media (max-width: 1024px) {
    #bootstrapForm {
        padding: 15px;
    }

    .form-control {
        padding: 15px;
    }

    .btn {
        padding: 7px 15px;
    }
}

/* Responsive styles for mobile devices */
@media (max-width: 768px) {
    #bootstrapForm {
        padding: 10px;
    }

    .form-control {
        padding: 10px;
    }

    .btn {
        padding: 5px 10px;
    }
}
</style>