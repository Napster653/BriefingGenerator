let currentSlotTarget = null;

document.getElementById('generate').addEventListener('click', function ()
{
    const mission_name = document.getElementById('mission_name').value;
    const mission_map = document.getElementById('mission_map').value;
    const mission_type = document.getElementById('mission_type').value;
    const mission_pretty_name = document.getElementById('mission_pretty_name').value;
    const mission_image = document.getElementById('mission_image').value;
    const mission_hcs = document.getElementById('mission_hcs').value;
    const mission_situation_bold = document.getElementById('mission_situation_bold').value;
    const mission_situation = document.getElementById('mission_situation').value;
    const mission_mission = document.getElementById('mission_mission').value;
    const mission_hostiles = document.getElementById('mission_hostiles').value;
    const mission_allies = document.getElementById('mission_allies').value;
    const mission_weather = document.getElementById('mission_weather').value;
    const mission_ace = document.getElementById('mission_ace').value;
    const mission_notes = document.getElementById('mission_notes').value;
    const mission_radio_long = document.getElementById('mission_radio_long').value;
    const mission_radio_short = document.getElementById('mission_radio_short').value;
    const mission_jip = document.getElementById('mission_jip').checked;
    const mission_respawn = document.getElementById('mission_respawn').checked;
    const mission_ocap = document.getElementById('mission_ocap').checked;
    const mission_total_slots = document.getElementById('mission_total_slots').value;
    const mission_unit_name = document.getElementById('mission_unit_name').value;
    const mission_orbat = document.getElementById('mission_orbat').value;
    const mission_addons = document.getElementById('mission_addons').value;
    const mission_gop_notes = document.getElementById('mission_gop_notes').value;

    output = ''
    output += mission_name.trim()
    output += '\n\n';
    if (mission_type == 'martes')
        output += `[size=200][color=#FFFF00][b]${mission_pretty_name.trim()} XX/XX MARTES 20:00H (Peninsular)[/b][/color][/size]\n\n`;
    else if (mission_type == 'viernes')
        output += `[size=200][color=#FFFF00][b]${mission_pretty_name.trim()} XX/XX VIERNES 22:30H (Peninsular)[/b][/color][/size]\n\n`;
    else
        output += `[size=200][color=#FFFF00][b]${mission_pretty_name.trim()} XX/XX DIA_DE_LA_SEMANA XX:XXH (Peninsular)[/b][/color][/size]\n\n`;
    output += `[img]${mission_image}[/img]\n\n`;
    output += `[color=#FF8000][u][b]Situación[/b][/u][/color]\n\n[b]${mission_situation_bold}[/b]\n\n${mission_situation}\n\n`;
    output += `[color=#FF8000][u][b]Misión[/b][/u][/color]\n\n${mission_mission}\n\n`;
    output += `[color=#FF8000][u][b]Fuerza Hostil[/b][/u][/color]\n\n${mission_hostiles}\n\n`;
    output += `[color=#FF8000][u][b]Soporte y Medios[/b][/u][/color]\n\n${mission_allies}\n\n`;
    output += `[color=#FF8000][u][b]Clima[/b][/u][/color]\n\n${mission_weather}\n\n`;
    output += `[color=#FF8000][u][b]ACE[/b][/u][/color]\n\n${mission_ace}\n\n`;
    output += `[color=#FF8000][u][b]Notas del editor[/b][/u][/color]\n\n${mission_notes}\n\n`;
    output += `[color=#FF8000][u][b]Canales de Radio[/b][/u][/color]\n\n[color=#FFFFFF][b]${mission_radio_long}[/b][/color]\n[color=#FFFF40][b]${mission_radio_short}[/b][/color]\n\n`;
    output += '---\n\n';
    output += `Se dispone de ${mission_total_slots} slots\n`;
    if (mission_jip)
        output += 'La partida es Join in progress y ';
    else
        output += 'La partida no es Join in progress y ';
    if (mission_respawn)
        output += 'hay respawn ';
    else
        output += 'no hay respawn ';
    if (mission_jip)
        output += ':jip: ';
    else
        output += ':nojip: ';
    if (mission_respawn)
        output += '\n\n';
    else
        output += ':norespawn:\n\n';
    output += `[color=#FFFF40][b]${mission_unit_name}[/b][/color]\n\n`;
    let lines = mission_orbat.split('\n');
    let emptyLineMarker = true;
    for (let i = 0; i < lines.length; i++)
    {
        if (lines[i].trim() == '')
        {
            emptyLineMarker = true;
            output += '\n';
            continue;
        }
        if (i === 0 || emptyLineMarker)
        {
            output += `[color=#80BFFF][b]${lines[i]}[/b][/color]\n`
            emptyLineMarker = false;
        }
        else
        {
            output += `[rol]${lines[i]}[b][color=#80BFFF][slot][/slot][/color][/b][/rol]\n`
        }
    }
    output += '\n---\n\n'
    output += `[b]Addons necesarios:[/b][color=#FFFF00][b]\n${mission_addons}[/b][/color]\n\n`
    output += '---\n\n'
    output += `${mission_name}\n`
    output += `${mission_map}\n`
    output += `${mission_hcs} HCs\n`
    output += `${mission_total_slots} slots\n`
    if (mission_jip)
        output += `[color=#00FF00]JIP[/color]\n`
    else
        output += `[color=#FF0000]NO JIP[/color]\n`
    if (mission_respawn)
        output += `[color=#00FF00]RESPAWN[/color]\n`
    else
        output += `[color=#FF0000]NO RESPAWN[/color]\n`
    if (mission_ocap)
        output += `[color=#00FF00]OCAP[/color]\n`
    else
        output += `[color=#FF0000]NO OCAP[/color]\n`
    output += mission_gop_notes
    output += '\n\n';
    output += '[b]Al reservar slot aceptamos la normativa: [/b]https://squadalpha.es/normativa/'


    document.getElementById('output').value = output
});

document.getElementById('mission_name').addEventListener('input', function (event)
{
    const missionName = event.target.value;
    const parts = missionName.split('.');
    if (parts.length === 3)
    {
        document.getElementById('mission_map').value = parts[1].trim();
    }
});


function add_briefing_section(briefing_sections, section_name)
{
    if (!section_name || section_name.trim() === '')
        section_name = 'Nueva Sección';

    // Create a new section with the given name
    briefing_sections.innerHTML += `
        <div class="col-12 my-2">
            <div class="input-group">
                <span class="input-group-text handle" style="border-bottom-left-radius: 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-horizontal" viewBox="0 0 16 16">
                        <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                </span>
                <input type="text" class="form-control" value="${section_name}">
                <button class="btn btn-danger delete-button" type="button" style="border-bottom-right-radius: 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                </button>
            </div>
            <textarea class="form-control" rows="3" style="border-top: 0; border-top-left-radius: 0; border-top-right-radius: 0;"></textarea>
        </div>`;
}

function add_squad(orbat, squad_name)
{
    if (!squad_name || squad_name.trim() === '')
        squad_name = 'Nueva Escuadra';

    // Create a new squad with the given name
    orbat.innerHTML += `
        <div class="col-2 m-2">
            <div class="input-group">
                <span class="input-group-text handle-squads" style="border-bottom-left-radius: 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
                        <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                </span>
                <input type="text" class="form-control" value="${squad_name}">
                <button class="btn btn-success add_slot_button" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                    </svg>
                </button>
                <button class="btn btn-danger delete-squad-button" type="button" style="border-bottom-right-radius: 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                </button>
            </div>
            <div class="slots-list">
            </div>
        </div>`;
}

function add_slot(slots_list, slot_name)
{
    if (!slot_name || slot_name.trim() === '')
        slot_name = 'Nuevo Slot';

    // Create a new slot with the given name
    slots_list.innerHTML += `
        <div class="input-group">
            <span class="input-group-text handle-slots border border-top-0" style="border-radius: 0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-horizontal" viewBox="0 0 16 16">
                    <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
            </span>
            <a class="form-control border border-top-0 text-decoration-none slot" style="cursor: default;" data-bs-toggle="modal" data-bs-target="#slotsModal">
                ${slot_name}
            </a>
            <button class="btn btn-secondary delete-slot-button border-top-0" type="button" style="border-radius: 0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
            </button>
        </div>`;
}

function assign_slot(value)
{
    if (currentSlotTarget)
    {
        currentSlotTarget.textContent = value;
        // Close the modal
        bootstrap.Modal.getInstance(document.getElementById('slotsModal')).hide();
    }
}

document.addEventListener('DOMContentLoaded', () =>
{
    briefing_sections = document.getElementById('briefing_sections');
    orbat = document.getElementById('orbat');

    add_briefing_section(briefing_sections, 'Situación');
    add_briefing_section(briefing_sections, 'Misión');
    add_briefing_section(briefing_sections, 'Soporte y medios');
    add_briefing_section(briefing_sections, 'Fuerza Hostil');
    add_briefing_section(briefing_sections, 'Clima');
    add_briefing_section(briefing_sections, 'Notas del editor');

    Sortable.create(document.getElementById('briefing_sections'), {
        animation: 150,
        handle: '.handle',
        ghostClass: 'sortable-ghost',
    });
    Sortable.create(document.getElementById('orbat'), {
        animation: 150,
        handle: '.handle-squads',
        ghostClass: 'sortable-ghost',
    });
    document.querySelectorAll('.slots-list').forEach(slots_list =>
    {
        // Get the parent input-group div and add a sortable to it
        Sortable.create(slots_list, {
            animation: 150,
            handle: '.handle-slots',
            ghostClass: 'sortable-ghost',
        });
    });

    // Button event listeners
    briefing_sections.addEventListener('click', function (event)
    {
        if (event.target.closest('.delete-button'))
            event.target.closest('.col-12').remove();
    });
    orbat.addEventListener('click', function (event)
    {
        if (event.target.closest('.delete-squad-button'))
            event.target.closest('.col-2').remove();
        if (event.target.closest('.delete-slot-button'))
            event.target.closest('.input-group').remove();
        if (event.target.closest('.add_slot_button'))
            add_slot(event.target.closest('.col-2').querySelector('.slots-list'), 'Nuevo Slot');
        if (event.target.closest('.slot'))
            currentSlotTarget = event.target.closest('.slot');
    });

    document.getElementById('add_section_button').addEventListener('click', function ()
    {
        add_briefing_section(briefing_sections, 'Nueva Sección');
    });
    document.getElementById('add_squad_button').addEventListener('click', function ()
    {
        add_squad(orbat, 'Nueva Escuadra');
    });

    document.querySelectorAll('#slotsModal .list-group-item').forEach(item =>
    {
        item.addEventListener('click', function ()
        {
            assign_slot(item.firstChild.textContent);
        });
    });

    window.addEventListener('keypress', function (event)
    {
        // if the key pressed is H, set currentSlotTarget text to the HQ and close modal
        switch (event.code)
        {
            case 'KeyH': assign_slot('HQ'); break;
            case 'KeyL': assign_slot('Líder de escuadra'); break;
            case 'KeyE': assign_slot('Líder de equipo'); break;
            case 'KeyR': assign_slot('RTO'); break;
            case 'KeyM': assign_slot('Médico'); break;
            case 'KeyD': assign_slot('Doctor'); break;
            case 'KeyS': assign_slot('Sanitario'); break;
            case 'KeyF': assign_slot('Fusilero'); break;
            case 'KeyG': assign_slot('Granadero'); break;
            case 'KeyT': assign_slot('Tirador selecto'); break;
            case 'KeyA': assign_slot('Ametrallador'); break;
            case 'KeyP': assign_slot('Piloto'); break;
            default:
                break;
        }
    });

    document.getElementById('slotsModal').addEventListener('hidden.bs.modal', function ()
    {
        currentSlotTarget = null;
    });
});
