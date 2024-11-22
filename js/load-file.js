/*
 <!-- Изначальное состояние поля для загрузки изображения -->
            <fieldset class="img-upload__start">
              <input type="file" id="upload-file" class="img-upload__input  visually-hidden" name="filename" required>
              <label for="upload-file" class="img-upload__label  img-upload__control">Загрузить</label>
            </fieldset>
<!-- Предварительный просмотр изображения -->
                  <div class="img-upload__preview">
                    <img src="img/upload-default-image.jpg" alt="Предварительный просмотр фотографии">
                  </div>
*/
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});
