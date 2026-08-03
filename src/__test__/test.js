/**
 * @jest-environment jsdom
 */

describe('Тестирование кнопки', () => {
  let buttonElement;

  beforeEach(() => {
    // 1. Очищаем кэш модулей перед каждым тестом
    jest.resetModules();

    // 2. Создаем чистую разметку
    document.body.innerHTML = `
      <div id="root" class="widget">
        <button class="popover-trigger" data-title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
      </div> 
    `;

    buttonElement = document.querySelector('.popover-trigger');

    // 3. Загружаем файл через require БЕЗ всяких async/await и import!
    // Теперь Babel сам правильно обработает этот файл
    require('../js/app.js');
  });

  describe('Функция onClick', () => {
    test('Клик по пустому месту', () => {
      document.body.click();
      expect(buttonElement.querySelector('.popover')).toBeNull();
    });

    test('Должен открывать popover при первом клике на кнопку', () => {
      buttonElement.click();

      const isPopver = buttonElement.querySelector('.popover');
      expect(isPopver).not.toBeNull();
    });

    test('Должен закрывать popover при повторном клике на кнопку', () => {
      buttonElement.click();
      expect(buttonElement.querySelector('.popover')).not.toBeNull();

      buttonElement.click();

      const isPopver = buttonElement.querySelector('.popover');
      expect(isPopver).toBeNull();
    });
  });
});
