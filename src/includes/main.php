   </header>

    <div id="mainContent">
      <div id="mainText">
        <p>Välj alternativ</p>
      </div>

      <div id="mainLinks">
        <form>
          <input type="button" class="btn" id="showAllBtn" value="Se alla" onclick="listAll()">
          <input type="button" class="btn" id="createBtn" value="Skapa ny" onclick="createNew()">
          <input type="button" class="btn" id="goBackBtn" value="Tillbaka" onclick="window.location.href='welcome.php'">
        </form>
      </div>

      <div id="mainType">
        <p>Typ av data</p>
      </div>

      <div id="mainResult">
      </div>

      <div id="mainSignout">
        <form>
        </form>
      </div>
    </div>

    <!-- The Modal Create New -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" id="closeCross">&times;</span>
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
              <input type="button" class="btn" id="enterBtn" value="Skapa" onclick="createNew()">
              <input type="button" class="btn" id="closeBtn" value="Stäng" onclick="closeDownModal()">
              <!-- <input type="button" class="btn" id="updateBtn" value="Uppdatera"> -->
              <!-- <input type="button" class="btn" id="deleteBtn" value="Ta bort"> -->
            </form>
          </div>
      </div>
    </div>
