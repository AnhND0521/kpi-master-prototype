$("#nav-home").click(() => window.location.href = 'home.html');
$("#nav-kpi-list").click(() => window.location.href = 'kpi.html');
$("#nav-schedule").click(() => window.location.href = 'schedule.html');
$("#nav-noti").click(() => window.location.href = 'notifications.html');
$("#nav-settings").click(() => window.location.href = 'settings.html');

function inputGainsFocus() {
    $($($(this).parent().get(0)).parent().get(0)).css("border-width", "2px");
}

function inputLosesFocus() {
    $($($(this).parent().get(0)).parent().get(0)).css("border-width", "1px");
}

$("input,select,textarea").focus(inputGainsFocus);
$("input,select,textarea").blur(inputLosesFocus);

function setHeader() {
    const header = $(`
    <div style="width: 1440px; height: 79px; left: 0px; top: 0px; position: fixed; z-index: 1;">
        <div style="width: 1440px; height: 79px; left: 0px; top: 0px; position: absolute; background: #7E56DA"></div>
        <img style="width: 45px; height: 45px; left: 1357px; top: 17px; position: absolute; border-radius: 50px; cursor: pointer" src="img/icon-user.png" onclick="(window.location.href = 'profile.html')" />
        <div style="left: 87px; top: 18px; position: absolute; color: white; font-size: 28px; font-family: Arial; font-weight: 700; word-wrap: break-word; cursor: pointer" onclick="(window.location.href = 'home.html')">KPI Master</div>
        <div style="left: 1220px; top: 23px; position: absolute; color: white; font-size: 20px; font-family: Arial; font-weight: 500; word-wrap: break-word; cursor: pointer" onclick="(window.location.href = 'profile.html')">Nguyen-san</div>
        <div style="width: 361px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; left: 539px; top: 19px; position: absolute; background: white; border-radius: 10px; border: 1px #E1E2E9 solid; justify-content: space-between; align-items: flex-start; display: inline-flex">
            <div style="color: #000000; font-size: 16px; font-family: Arial; font-weight: 400; line-height: 24px; word-wrap: break-word; width: 100%">
                <input type="text" placeholder="Tìm kiếm" >
            </div>
            <div style="width: 24px; height: 24px; position: relative">
                <img style="width: 20px; height: 20px; left: 2px; top: 2px; position: absolute;" src="img/icon-search.png"></div>
            </div>
        </div>
        <img style="width: 128px; height: 85px; left: -17px; top: -3px; position: fixed; z-index: 1; cursor: pointer" src="img/logo-white.png" onclick="(window.location.href = 'home.html')" />
    </div>`);
    $("body").append(header);
}