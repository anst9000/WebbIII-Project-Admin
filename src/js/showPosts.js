function showEducationPost(id) {
  let entry = ''
  let modalContent = ''
  let singleUrl = 'http://studenter.miun.se/~anst9000/writeable/dt173g_project/api/education/read_single.php?id=' + id

  modal.empty()
  $('.modal').empty()

  $.ajax({
    type: 'GET',
    url: singleUrl,
    dataType: 'json',
    success: function (result) {
      entry = result

      modalContent = `
        <div class="modal-content">
          <span class="close" id="closeCross" onclick="closeDownModal()">&times;</span>
          <div class="modal-header">
            <p>Utbildning ${entry.school}</p>
            </div>
            <div class="modal-body">
              <p class="modal-info">För att redigera en utbildning så ändrar du bara i de fält som behöver uppdateras. För att ta bort utbildningen så klickar du på knappen 'TA BORT'</p>
              <form>
                <label for="school">Skolans namn</label>
                <input type="text" name="school" id="inputEduSchool" value="${entry.school}">
                <label for="course">Typ av utbildning</label>
                <input type="text" name="course" id="inputEduCourse" value="${entry.course}">
                <label for="start_date">Började (ÅÅÅÅ-MM-DD)</label>
                <input type="text" name="start_date" id="inputEduStart" value="${entry.start_date}">
                <label for="end_date">Slutade (ÅÅÅÅ-MM-DD)</label>
                <input type="text" name="end_date" id="inputEduEnd" value="${entry.end_date}">
              </form>
            </div>

            <div class="modal-footer">
              <form>
              <input type="button" class="btn" id="updateBtn" value="Uppdatera" onclick="updatePost('${entry.id}', '${entry.school}', '${forkEducation}')">
              <input type="button" class="btn" id="deleteBtn" value="Ta bort" onclick="deletePost('${entry.id}', '${entry.school}', '${forkEducation}')">
              <input type="button" class="btn" id="closeBtn" value="Stäng" onclick="closeDownModal()">
              </form>
            </div>
        </div>`

      modal.append(modalContent)
      modal.css('display', 'block')

    },
    error: function (textStatus, errorThrown) {
      console.log('Status: ' + textStatus);
      console.log('Error: ' + errorThrown);
    }
  })
}


function showJobPost(id) {
  let entry = ''
  let modalContent = ''
  let singleUrl = 'http://studenter.miun.se/~anst9000/writeable/dt173g_project/api/job/read_single.php?id=' + id

  modal.empty()
  $('.modal').empty()

  $.ajax({
    type: 'GET',
    url: singleUrl,
    dataType: 'json',
    success: function (result) {
      entry = result

      modalContent = `
        <div class="modal-content">
          <span class="close" id="closeCross" onclick="closeDownModal()">&times;</span>
          <div class="modal-header">
            <p>Arbetsgivare ${entry.company}</p>
            </div>
            <div class="modal-body">
              <p class="modal-info">För att redigera en arbetsgivare så ändrar du bara i de fält som behöver uppdateras. För att ta bort utbildningen så klickar du på knappen 'TA BORT'</p>
              <form>
                <label for="company">Arbetsgivarens namn</label>
                <input type="text" name="company" id="inputJobCompany" value="${entry.company}">
                <label for="title">Vilken tjänst</label>
                <input type="text" name="title" id="inputJobTitle" value="${entry.title}">
                <label for="start_date">Började (ÅÅÅÅ-MM-DD)</label>
                <input type="text" name="start_date" id="inputJobStart" value="${entry.start_date}">
                <label for="end_date">Slutade (ÅÅÅÅ-MM-DD)</label>
                <input type="text" name="end_date" id="inputJobEnd" value="${entry.end_date}">
              </form>
            </div>

            <div class="modal-footer">
              <form>
              <input type="button" class="btn" id="updateBtn" value="Uppdatera" onclick="updatePost('${entry.id}', '${entry.company}', '${forkJob}')">
              <input type="button" class="btn" id="deleteBtn" value="Ta bort" onclick="deletePost('${entry.id}', '${entry.company}', '${forkJob}')">
              <input type="button" class="btn" id="closeBtn" value="Stäng" onclick="closeDownModal()">
              </form>
            </div>
        </div>`

      modal.append(modalContent)
      modal.css('display', 'block')

    },
    error: function (textStatus, errorThrown) {
      console.log('Status: ' + textStatus);
      console.log('Error: ' + errorThrown);
    }
  })
}

function showWebsitePost(id) {
  let entry = ''
  let modalContent = ''
  let singleUrl = 'http://studenter.miun.se/~anst9000/writeable/dt173g_project/api/website/read_single.php?id=' + id

  modal.empty()
  $('.modal').empty()

  $.ajax({
    type: 'GET',
    url: singleUrl,
    dataType: 'json',
    success: function (result) {
      entry = result

      modalContent = `
        <div class="modal-content">
          <span class="close" id="closeCross" onclick="closeDownModal()">&times;</span>
          <div class="modal-header">
            <p>Hemsida ${entry.title}</p>
            </div>
            <div class="modal-body">
              <p class="modal-info">För att redigera en hemsidespost så ändrar du bara i de fält som behöver uppdateras. För att ta bort utbildningen så klickar du på knappen 'TA BORT'</p>
              <form>
                <label for="title">Namn på hemsidan</label>
                <input type="text" name="title" id="inputWebTitle" value="${entry.title}">
                <label for="description">Beskrivning av hemsidan</label>
                <textarea id="inputWebDescription" name="description" rows="5">${entry.description}</textarea>
                <label for="url">Adress till hemsidan</label>
                <input type="text" name="url" id="inputWebUrl" value="${entry.url}">
              </form>
            </div>

            <div class="modal-footer">
              <form>
              <input type="button" class="btn" id="updateBtn" value="Uppdatera" onclick="updatePost('${entry.id}', '${entry.title}', '${forkWebsite}')">
              <input type="button" class="btn" id="deleteBtn" value="Ta bort" onclick="deletePost('${entry.id}', '${entry.title}', '${forkWebsite}')">
              <input type="button" class="btn" id="closeBtn" value="Stäng" onclick="closeDownModal()">
              </form>
            </div>
        </div>`

      modal.append(modalContent)
      modal.css('display', 'block')

    },
    error: function (textStatus, errorThrown) {
      console.log('Status: ' + textStatus);
      console.log('Error: ' + errorThrown);
    }
  })
}
