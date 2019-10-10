// const preUrl = 'http://localhost/part_1_api/api/'
const preUrl = 'http://studenter.miun.se/~anst9000/writeable/dt173g_project/api/'
const postReadUrl = '/read.php'
const postCreateUrl = '/create.php'
let ajaxResult = []

// Variable for switchstatement in listAll
let forkEducation = 'education'
let forkJob = 'job'
let forkWebsite = 'website'

// Get some elements
let modal = $('#myModal')
// Get the button that opens the modal
let btn = $('#createBtn')
// Get the <span> element that closes the modal
let span = $('#closeCross')

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.css('display', 'block')
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.css('display', 'none')
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.css('display', 'none')
    modal.empty()
  }
}

function closeDownModal() {
  modal.css('display', 'none')
  modal.empty()
}

function openUpModal() {
  modal.css('display', 'block')
}


function parseEducation(id) {
  event.preventDefault();
  let eduSchool = $('#inputEduSchool').val()
  let eduCourse = $('#inputEduCourse').val()
  let eduStart_date = $('#inputEduStart').val()
  let eduEnd_date = $('#inputEduEnd').val()

  return eduInfo = {
    'id': id,
    'school': eduSchool,
    'course': eduCourse,
    'start_date': eduStart_date,
    'end_date': eduEnd_date
  }
}

function parseJob(id) {
  event.preventDefault();
  let jobCompany = $('#inputJobCompany').val()
  let jobTitle = $('#inputJobTitle').val()
  let jobStart_date = $('#inputJobStart').val()
  let jobEnd_date = $('#inputJobEnd').val()

  return jobInfo = {
    'id': id,
    'company': jobCompany,
    'title': jobTitle,
    'start_date': jobStart_date,
    'end_date': jobEnd_date
  }
}

function parseWebsite(id) {
  event.preventDefault();
  let webTitle = $('#inputWebTitle').val()
  let webDescription = $('#inputWebDescription').val()
  let webUrl = $('#inputWebUrl').val()

  return webInfo = {
    'id': id,
    'title': webTitle,
    'description': webDescription,
    'url': webUrl
  }
}

function parseCreateEducation(id) {
  event.preventDefault();
  let eduSchool = $('#inputEduSchool').val()
  let eduCourse = $('#inputEduCourse').val()
  let eduStart_date = $('#inputEduStart').val()
  let eduEnd_date = $('#inputEduEnd').val()

  return eduInfo = {
    'school': eduSchool,
    'course': eduCourse,
    'start_date': eduStart_date,
    'end_date': eduEnd_date
  }
}

function parseCreateJob() {
  event.preventDefault();
  let jobCompany = $('#inputJobCompany').val()
  let jobTitle = $('#inputJobTitle').val()
  let jobStart_date = $('#inputJobStart').val()
  let jobEnd_date = $('#inputJobEnd').val()

  return jobInfo = {
    'company': jobCompany,
    'title': jobTitle,
    'start_date': jobStart_date,
    'end_date': jobEnd_date
  }
}

function parseCreateWebsite(id) {
  event.preventDefault();
  let webTitle = $('#inputWebTitle').val()
  let webDescription = $('#inputWebDescription').val()
  let webUrl = $('#inputWebUrl').val()

  return webInfo = {
    'title': webTitle,
    'description': webDescription,
    'url': webUrl
  }
}

function updatePost(id, typeOfData, dbTable) {
  let info = {}

  switch (dbTable) {
    case 'education':
      info = parseEducation(id)
      break
    case 'job':
      info = parseJob(id)
      break
    case 'website':
      info = parseWebsite(id)
      break
    default:
      break
  }

  let data = JSON.stringify(info)

  $.ajax({
    type: 'PUT',
    url: preUrl + dbTable + '/update.php',
    dataType: 'json',
    data: data,
    success: function (result) {
    },
    error: function (textStatus, errorThrown) {
      alert('Status: ' + textStatus);
      alert('Error: ' + errorThrown);
    }
  })

  $('.modal-info').fadeOut(1000)
  $('#mainResult').empty()
  $('#mainResult').html('<div></div>')

  $('.modal-body form').fadeOut(1000, function () {
    $(this).text(typeOfData + ' är nu uppdaterad.').css('font-weight', 'bold').css('font-size', '1.5rem').css('padding-top', '3rem').css('text-align', 'center').show()
  })

  $('.modal-footer').fadeOut(1000, function () {
    $(this).html(`
      <form>
        <input type="button" class="btn" id="closeBtn" value="Stäng" onclick="closeDownModal()">
      </form>`).show()
  })

}

function executeDelete(id, typeOfData, dbTable) {

  let info = {
    "id": id
  }

  let data = JSON.stringify(info)

  $.ajax({
    type: 'DELETE',
    url: preUrl + dbTable + '/delete.php',
    dataType: 'json',
    data: data,
    success: function (result) {
    },
    error: function (textStatus, errorThrown) {
      alert('Status: ' + textStatus);
      alert('Error: ' + errorThrown);
    }
  })

  $('.modal-info').fadeOut(1000)
  $('#mainResult').empty()
  $('#mainResult').html('<div></div>')

  $('.modal-body form').fadeOut(1000, function () {
    $(this).text(typeOfData + ' är borttagen från databasen.').css('font-weight', 'bold').css('font-size', '1.5rem').css('padding-top', '3rem').css('text-align', 'center').show()
  })

  $('.modal-footer').fadeOut(1000, function () {
    $(this).html(`
      <form>
        <input type="button" class="btn" id="closeBtn" value="Stäng" onclick="closeDownModal()">
      </form>`).show()
  })
}

function notDeletion(typeOfData) {
  $('.modal-info').fadeOut(1000)
  $('#mainResult').empty()
  $('#mainResult').html('<div></div>')

  $('.modal-body form').fadeOut(1000, function () {
    $(this).text(typeOfData + ' är kvar i databasen.').css('font-weight', 'bold').css('font-size', '1.5rem').css('padding-top', '3rem').css('text-align', 'center').show()
  })

  $('.modal-footer').fadeOut(1000, function () {
    $(this).html(`
      <form>
        <input type="button" class="btn" id="closeBtn" value="Stäng" onclick="closeDownModal()">
      </form>`).show()
  })

}

function deletePost(id, typeOfData, dbTable) {

  $('.modal-info').fadeOut(1000)

  $('#mainResult').empty()
  $('#mainResult').html('<div></div>')

  $('.modal-body form').fadeOut(1000, function () {
    $(this).text('Vill du verkligen ta bort ' + typeOfData + '?').css('font-weight', 'bold').css('font-size', '1.5rem').css('padding-top', '3rem').css('text-align', 'center').show()
  })

  $('.modal-footer').fadeOut(1000, function () {
    $(this).html(`
      <form>
        <input type="button" class="btn" value="Ja" onclick="executeDelete('${id}', '${typeOfData}', '${dbTable}')">
        <input type="button" class="btn" id="closeBtn" value="Nej" onclick="notDeletion('${typeOfData}')">
      </form>`).show()
  })
}


function createNew() {
  let buttonId = $('.header-name').text()

  let fork = ''
  let output = ''
  let url = ''

  modal.empty()
  $('.modal').empty()
  let modalContent = ''

  switch (buttonId) {
    case ('Utbildningar'):
      fork = forkEducation
      modalContent = outputCreateEducation
      url = preUrl + fork + postCreateUrl
      break
    case ('Arbeten'):
      fork = forkJob
      modalContent = outputCreateJob
      url = preUrl + fork + postCreateUrl
      break
    case ('Hemsidor'):
      fork = forkWebsite
      modalContent = outputCreateWebsite
      url = preUrl + fork + postCreateUrl
      break
    default:
      break
  }
  modal.append(modalContent)
  modal.css('display', 'block')
}


function createPost(dbTable) {
  let info = {}
  let headTitle = ''

  switch (dbTable) {
    case 'education':
      info = parseEducation()
      headTitle = info.school
      break
    case 'job':
      info = parseJob()
      headTitle = info.company
      break
    case 'website':
      info = parseWebsite()
      headTitle = info.title
      break
    default:
      break
  }

  let data = JSON.stringify(info)

  $.ajax({
    type: 'PUT',
    url: preUrl + dbTable + '/create.php',
    dataType: 'json',
    data: data,
    success: function (result) {
    },
    error: function (textStatus, errorThrown) {
      alert('Status: ' + textStatus);
      alert('Error: ' + errorThrown);
    }
  })

  $('.modal-info').fadeOut(1000)
  $('#mainResult').empty()
  $('#mainResult').html('<div></div>')

  $('.modal-body form').fadeOut(1000, function () {
    $(this).text(headTitle + ' är nu skapad.').css('font-weight', 'bold').css('font-size', '1.5rem').css('padding-top', '3rem').css('text-align', 'center').show()
  })

  $('.modal-footer').fadeOut(1000, function () {
    $(this).html(`
      <form>
        <input type="button" class="btn" id="closeBtn" value="Stäng" onclick="closeDownModal()">
      </form>`).show()
  })

}

function listAll() {
  let buttonId = $('.header-name').text()

  let fork = ''
  let output = ''
  let url = ''

  switch (buttonId) {
    case ('Utbildningar'):
      fork = forkEducation
      output = outputEducation
      url = preUrl + fork + postReadUrl
      getEducationData(url, output)
      break
    case ('Arbeten'):
      fork = forkJob
      output = outputJob
      url = preUrl + fork + postReadUrl
      getJobData(url, output)
      break
    case ('Hemsidor'):
      fork = forkWebsite
      output = outputWebsite
      url = preUrl + fork + postReadUrl
      getWebsiteData(url, output)
      break
    default:
      break
  }
}
