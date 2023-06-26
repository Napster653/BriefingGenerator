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
