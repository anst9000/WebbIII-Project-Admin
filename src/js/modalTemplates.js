let outputEducation = `
<div class="table-responsive">
  <table id="all-courses-table" class="table cell-border compact stripe" cellspacing="0" width="100%">
    <thead id="all-courses-table-head">
      <tr>
        <th class="th-sm">ID</th>
        <th class="th-sm" align="left" style="padding-left: 8px;">Lärosäte</th>
        <th class="th-sm" align="left" style="padding-left: 8px;">Utbildning</th>
        <th class="th-sm">Start</th>
        <th class="th-sm">Slut</th>
      </tr>
    </thead>
  <tbody id="all-courses-table-body">`;

let outputJob = `
<div class="table-responsive">
  <table id="all-courses-table" class="table cell-border compact stripe" cellspacing="0" width="100%">
    <thead id="all-courses-table-head">
      <tr>
        <th class="th-sm">ID</th>
        <th class="th-sm" align="left" style="padding-left: 8px;">Arbetsgivare</th>
        <th class="th-sm" align="left" style="padding-left: 8px;">Tjänst</th>
        <th class="th-sm">Start</th>
        <th class="th-sm">Slut</th>
      </tr>
    </thead>
  <tbody id="all-courses-table-body">`;

let outputWebsite = `
<div class="table-responsive">
  <table id="all-courses-table" class="table cell-border compact stripe" cellspacing="0" width="100%">
    <thead id="all-courses-table-head">
      <tr>
        <th class="th-sm">ID</th>
        <th class="th-sm" align="left" style="padding-left: 8px;">Webbsida</th>
        <th class="th-sm" align="left" style="padding-left: 8px;">Beskrivning</th>
        <th class="th-sm">Adress</th>
      </tr>
    </thead>
  <tbody id="all-courses-table-body">`;


let outputCreateEducation = `
  <div class="modal-content">
    <span class="close" id="closeCross" onclick="closeDownModal()">&times;</span>
    <div class="modal-header">
      <p>Skapa ny utbildning</p>
    </div>
      <div class="modal-body">
        <p class="modal-info">För att skapa en ny utbildning så måste du fylla i fälten och klicka på knappen 'SKAPA'</p>
        <form>
          <label for="school">Skolans namn</label>
          <input type="text" name="school" id="inputEduSchool">
          <label for="course">Typ av utbildning</label>
          <input type="text" name="course" id="inputEduCourse">
          <label for="start_date">Började (ÅÅÅÅ-MM-DD)</label>
          <input type="text" name="start_date" id="inputEduStart">
          <label for="end_date">Slutade (ÅÅÅÅ-MM-DD)</label>
          <input type="text" name="end_date" id="inputEduEnd">
        </form>
        </div>

        <div class="modal-footer">
          <form>
            <input type="button" class="btn" id="enterBtn" value="Skapa" onclick="createPost('education')">
            <input type="button" class="btn" id="closeBtn" value="Stäng" onclick="closeDownModal()">
        </form>
      </div>
  </div>`

let outputCreateJob = `
  <div class="modal-content">
    <span class="close" id="closeCross" onclick="closeDownModal()">&times;</span>
    <div class="modal-header">
      <p>Skapa ny arbetsgivare</p>
    </div>
      <div class="modal-body">
        <p class="modal-info">För att skapa en ny arbetsgivare så måste du fylla i fälten och klicka på knappen 'SKAPA'</p>
        <form>
            <label for="company">Arbetsgivarens namn</label>
            <input type="text" name="company" id="inputJobCompany">
            <label for="title">Vilken tjänst</label>
            <input type="text" name="title" id="inputJobTitle">
            <label for="start_date">Började (ÅÅÅÅ-MM-DD)</label>
            <input type="text" name="start_date" id="inputJobStart">
            <label for="end_date">Slutade (ÅÅÅÅ-MM-DD)</label>
            <input type="text" name="end_date" id="inputJobEnd">
          </form>
        </div>

        <div class="modal-footer">
          <form>
            <input type="button" class="btn" id="enterBtn" value="Skapa" onclick="createPost('job')">
            <input type="button" class="btn" id="closeBtn" value="Stäng" onclick="closeDownModal()">
        </form>
      </div>
  </div>`

let outputCreateWebsite = `
  <div class="modal-content">
    <span class="close" id="closeCross" onclick="closeDownModal()">&times;</span>
    <div class="modal-header">
      <p>Skapa ny hemsidespost</p>
    </div>
      <div class="modal-body">
        <p class="modal-info">För att skapa en ny hemsidespost så måste du fylla i fälten och klicka på knappen 'SKAPA'</p>
        <form>
          <label for="title">Namn på hemsidan</label>
          <input type="text" name="title" id="inputWebTitle">
          <label for="description">Beskrivning av hemsidan</label>
          <textarea id="inputWebDescription" name="description" rows="5"></textarea>
          <label for="url">Adress till hemsidan</label>
          <input type="text" name="url" id="inputWebUrl">
        </form>
      </div>

      <div class="modal-footer">
        <form>
          <input type="button" class="btn" id="enterBtn" value="Skapa" onclick="createPost('website')">
          <input type="button" class="btn" id="closeBtn" value="Stäng" onclick="closeDownModal()">
      </form>
    </div>
  </div>`


function getEducationData(url, output) {

  $.ajax({
    type: "GET",
    url: url,
    dataType: 'json',
    success: function (result) {
      ajaxResult.push(result.records);

      for (let i in result.records) {
        let eduId = result.records[i].id
        let eduSchool = result.records[i].school
        let eduCourse = result.records[i].course
        let eduStart = result.records[i].start_date
        let eduEnd = result.records[i].end_date

        output += `
        <tr>
          <td>${eduId}</td>
          <td id="tableLink" align="left" onclick="showEducationPost(${eduId})">${eduSchool}</td>
          <td align="left">${eduCourse}</td>
          <td>${eduStart}</td>
          <td>${eduEnd}</td>
        </tr>`
      }
      output += '</tbody></table></div>';

      $('#mainResult').empty()
      $('#mainResult').html(output)

    }
  });

}

function getJobData(url, output) {

  $.ajax({
    type: "GET",
    url: url,
    dataType: 'json',
    success: function (result) {
      ajaxResult.push(result.records);

      for (let i in result.records) {
        let jobId = result.records[i].id
        let jobCompany = result.records[i].company
        let jobTitle = result.records[i].title
        let jobStart = result.records[i].start_date
        let jobEnd = result.records[i].end_date

        output += `
        <tr>
          <td>${jobId}</td>
          <td id="tableLink" align="left" onclick="showJobPost(${jobId})">${jobCompany}</td>
          <td align="left">${jobTitle}</td>
          <td>${jobStart}</td>
          <td>${jobEnd}</td>
        </tr>`
      }
      output += '</tbody></table></div>';

      $('#mainResult').empty()
      $('#mainResult').html(output)
    }
  });

}

function getWebsiteData(url, output) {

  $.ajax({
    type: "GET",
    url: url,
    dataType: 'json',
    success: function (result) {
      ajaxResult.push(result.records);

      for (let i in result.records) {
        let webId = result.records[i].id
        let webTitle = result.records[i].title
        let webUrl = result.records[i].url
        let webDescription = result.records[i].description

        output += `
        <tr>
          <td>${webId}</td>
          <td id="tableLink" align="left" onclick="showWebsitePost(${webId})">${webTitle}</td>
          <td align="left">${webDescription}</td>
          <td align="left">${webUrl}</td>
        </tr>`
      }
      output += '</tbody></table></div>';

      $('#mainResult').empty()
      $('#mainResult').html(output)
    }
  });

}
